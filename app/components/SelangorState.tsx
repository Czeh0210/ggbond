'use client';

import { useEffect, useRef, useState } from 'react';
import LandmarkInfo, { LandmarkData } from './LandMarkTab';

// Define data for landmarks in this state
const landmarks: { [key: string]: LandmarkData } = {
  lamp: {
    name: 'Historic Streetlight',
    location: 'Kuala Lumpur',
    type: 'default',
    mainImage: '/assets/lamp(unlighted).png',
    info: {
      description: 'An old-style streetlight, preserving the historical ambiance of the area.',
      stats: [
        { label: 'Style', value: 'Colonial' },
        { label: 'Installed', value: '1930s' },
      ],
    },
    history: {
      title: 'A Light in Time',
      text: 'These lamps were installed during the British colonial era and have been maintained ever since to preserve the city\'s heritage.',
    },
    photos: ['/assets/lamp(unlighted).png'],
  },
  airport: {
    name: 'KL International Airport',
    location: 'Sepang, Selangor',
    type: 'airport',
    mainImage: '/map/airport.png',
    info: {
      description: 'One of Southeast Asia\'s largest airports, serving as a major international hub.',
      stats: [
        { label: 'IATA Code', value: 'KUL' },
        { label: 'Opened', value: '1998' },
      ],
    },
    history: {
      title: 'Gateway to Malaysia',
      text: 'Opened in 1998 to handle the increasing air traffic for the region, replacing the old Subang Airport.',
    },
    photos: ['/map/airport.png'],
  },
};

const InState2 = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [landmarkInfoOpen, setLandmarkInfoOpen] = useState(false);
  const [currentLandmark, setCurrentLandmark] = useState<LandmarkData | null>(null);
  const [currentLandmarkImage, setCurrentLandmarkImage] = useState<string>('');
  const [hasFlightTicket, setHasFlightTicket] = useState(true); // User has a flight ticket by default
  // Define lamp objects as an array
  const lampsRef = useRef<Array<{
    x: number;
    y: number;
    width: number;
    height: number;
    isHovered: boolean;
    isLit: boolean;
    id: string; // Add id to link to landmark data
  }>>([{ 
    x: 1060, 
    y: 308, 
    width: 96, 
    height: 96,
    isHovered: false,
    isLit: false,
    id: 'lamp' // This could be more specific like 'lamp_1'
  },
  
  { 
    x: 564, 
    y: 250, 
    width: 96, 
    height: 96,
    isHovered: false,
    isLit: false,
    id: 'lamp'
  },
  
  { 
    x: 1300, 
    y: 600, 
    width: 96, 
    height: 96,
    isHovered: false,
    isLit: false,
    id: 'lamp'
  },
  { 
    x: 790, 
    y: 748, 
    width: 96, 
    height: 96,
    isHovered: false,
    isLit: false,
    id: 'lamp'
  }
  ]);
  
  // Camera reference for tracking the view position
  const cameraRef = useRef<{
    x: number;
    y: number;
    zoom: number; // Zoom level: 1 = normal, < 1 = zoomed out, > 1 = zoomed in
  }>({ 
    x: 0, 
    y: 0,
    zoom: 0.7 // Start zoomed out to see more of the world
  });
  
  // Airport reference
  const airportRef = useRef<{
    x: number;
    y: number;
    width: number;
    height: number;
    isHovered: boolean;
    id: string; // Add id
  }>({ 
    x: 826, 
    y: 578, 
    width: 0, // Will be set after image loads
    height: 0, // Will be set after image loads
    isHovered: false,
    id: 'airport'
  });
  
  // World size (larger than the canvas)
  const worldRef = useRef<{
    width: number;
    height: number;
  }>({ 
    width: 1600, 
    height: 1200
  });
  
  // Location name
  const locationName = "Kuala Lumpur";
  
  const playerRef = useRef<{
    x: number;
    y: number;
    width: number;
    height: number;
    speed: number;
    direction: string;
    frameX: number;
    frameY: number;
    frameCount: number;
    animationSpeed: number;
    frameTimer: number;
    targetX: number | null;
    targetY: number | null;
    isMovingToTarget: boolean;
    moveHorizontalFirst: boolean;
  }>({ 
    x: 828, 
    y: 580, 
    width: 96, 
    height: 96, 
    speed: 2, // Reduced speed for better control
    direction: 'down',
    frameX: 0,
    frameY: 0,
    frameCount: 0,
    animationSpeed: 10, // Lower = faster animation
    frameTimer: 0,
    targetX: null,
    targetY: null,
    isMovingToTarget: false,
    moveHorizontalFirst: true
  });
  
  const keysRef = useRef<{ [key: string]: boolean }>({
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = 800;
    canvas.height = 600;
    
    // Initialize camera position to center on player
    cameraRef.current = {
      x: playerRef.current.x - (canvas.width / cameraRef.current.zoom) / 2,
      y: playerRef.current.y - (canvas.height / cameraRef.current.zoom) / 2,
      zoom: cameraRef.current.zoom
    };
    
    // Display location name
    ctx.font = '24px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText('Location: ' + locationName, 20, 30);

    // Handle wheel events for zooming
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const zoomSpeed = 0.1;
      const newZoom = cameraRef.current.zoom + (e.deltaY > 0 ? -zoomSpeed : zoomSpeed);
      
      // Limit zoom levels between 0.5 (zoomed out) and 1.5 (zoomed in)
      cameraRef.current.zoom = Math.max(0.5, Math.min(1.5, newZoom));
    };
    
    canvas.addEventListener('wheel', handleWheel);

    // Load ocean image (bottom layer)
    const oceanImage = new Image();
    oceanImage.src = '/map/ocean.png';
    
    // Load background image
    const backgroundImage = new Image();
    backgroundImage.src = '/map/selangor.png'; // Different background for KL
    backgroundImage.onerror = () => {
      backgroundImage.src = '/map/State Background.png';
    };
    
    // Load airport image
    const airportImage = new Image();
    airportImage.src = '/map/airport.png';
    airportImage.onload = () => {
      // Set the airport dimensions based on the scaled image size
      airportRef.current.width = airportImage.width * 0.2;
      airportRef.current.height = airportImage.height * 0.2;
    };

    // Load lamp images (unlit and lit versions)
    const lampImage = new Image();
    lampImage.src = '/assets/lamp(unlighted).png';
    
    // We'll simulate a lit effect with canvas glow rather than loading another image

    // Load player character sprite sheet
    const playerImage = new Image();
    playerImage.src = '/character/BIRDSPRITESHEET_Blue.png';
    
    // Sprite sheet configuration based on the actual sprite sheet
    const spriteWidth = 32; // Width of each sprite frame
    const spriteHeight = 32; // Height of each sprite frame
    const spriteRows = 12; // Total rows in the sprite sheet
    const spriteCols = 4; // Number of columns per row (4 frames per animation)

    // Event listeners for key presses
    const handleKeyDown = (e: KeyboardEvent) => {
      if (keysRef.current.hasOwnProperty(e.key)) {
        keysRef.current[e.key] = true;
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (keysRef.current.hasOwnProperty(e.key)) {
        keysRef.current[e.key] = false;
      }
    };
    
    // Mouse event handlers for lamp and airport interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      // Scale mouse position if canvas is being displayed at a different size than its internal dimensions
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      
      const scaledX = mouseX * scaleX;
      const scaledY = mouseY * scaleY;
      
      const lamps = lampsRef.current;
      const airport = airportRef.current;
      const camera = cameraRef.current;
      
      // Adjust mouse position for camera offset and zoom
      const worldMouseX = (scaledX / camera.zoom) + camera.x;
      const worldMouseY = (scaledY / camera.zoom) + camera.y;
      
      // Reset hover state for all lamps and airport
      lamps.forEach(lamp => {
        lamp.isHovered = false;
      });
      airport.isHovered = false;
      
      // Check if mouse is over the airport
      const airportDistX = Math.abs(worldMouseX - airport.x);
      const airportDistY = Math.abs(worldMouseY - airport.y);
      
      if (airportDistX < airport.width / 2 && airportDistY < airport.height / 2) {
        setCurrentLandmark(landmarks[airport.id]);
        setLandmarkInfoOpen(true);
        return;
      }
      
      // Check if mouse is over any lamp
      for (const lamp of lamps) {
        const distX = Math.abs(worldMouseX - lamp.x);
        const distY = Math.abs(worldMouseY - lamp.y);
        
        if (distX < lamp.width / 2 && distY < lamp.height / 2) {
          lamp.isHovered = true;
          break; // Only hover one lamp at a time
        }
      }
    };
    
    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      
      const worldMouseX = (mouseX * scaleX / cameraRef.current.zoom) + cameraRef.current.x;
      const worldMouseY = (mouseY * scaleY / cameraRef.current.zoom) + cameraRef.current.y;
      
      const player = playerRef.current;
      
      // Check for airport click
      const airport = airportRef.current;
      if (Math.abs(worldMouseX - airport.x) < airport.width / 2 && Math.abs(worldMouseY - airport.y) < airport.height / 2) {
        setCurrentLandmark(landmarks[airport.id]);
        setLandmarkInfoOpen(true);
        player.targetX = airport.x;
        player.targetY = airport.y;
        player.isMovingToTarget = true;
        return;
      }
      
      // Check for lamp click
      for (const lamp of lampsRef.current) {
        if (Math.abs(worldMouseX - lamp.x) < lamp.width / 2 && Math.abs(worldMouseY - lamp.y) < lamp.height / 2) {
          lamp.isLit = !lamp.isLit;
          setCurrentLandmark(landmarks[lamp.id]);
          setLandmarkInfoOpen(true);
          player.targetX = lamp.x;
          player.targetY = lamp.y;
          player.isMovingToTarget = true;
          break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('click', handleClick);
    canvas.addEventListener('wheel', handleWheel);

    // Animation frame ID for cleanup
    let animationFrameId: number;
    
    // Game loop
    const gameLoop = () => {
      // Update player position based on key presses or target movement
      const player = playerRef.current;
      const camera = cameraRef.current;
      const world = worldRef.current;
      let isMoving = false;
      
      // Handle automatic movement to target (lamp)
      if (player.isMovingToTarget && player.targetX !== null && player.targetY !== null) {
        // Calculate distance to target
        const dx = player.targetX - player.x;
        const dy = player.targetY - player.y;
        
        // If we're close enough to the target, stop moving
        if (Math.abs(dx) < player.speed && Math.abs(dy) < player.speed) {
          // We've reached the target
          player.x = player.targetX;
          player.y = player.targetY;
          player.isMovingToTarget = false;
          player.targetX = null;
          player.targetY = null;
        } else {
          // Move in grid-like pattern: first horizontally, then vertically
          isMoving = true;
          
          // First move horizontally until aligned, then move vertically
          if (Math.abs(dx) > player.speed) {
            // Move horizontally
            if (dx > 0) {
              player.x += player.speed;
              player.direction = 'right';
              player.frameY = 1;
            } else {
              player.x -= player.speed;
              player.direction = 'left';
              player.frameY = 2;
            }
          } else if (Math.abs(dy) > player.speed) {
            // Move vertically
            if (dy > 0) {
              player.y += player.speed;
              player.direction = 'down';
              player.frameY = 0;
            } else {
              player.y -= player.speed;
              player.direction = 'up';
              player.frameY = 3;
            }
          }
        }
      } 
      // Only process keyboard input if not moving to target
      else if (!player.isMovingToTarget) {
        if (keysRef.current.ArrowUp) {
          player.y -= player.speed;
          player.direction = 'up';
          player.frameY = 3; // Up-facing sprites (fourth row in the sprite sheet)
          isMoving = true;
        }
        if (keysRef.current.ArrowDown) {
          player.y += player.speed;
          player.direction = 'down';
          player.frameY = 0; // Down-facing sprites (first row in the sprite sheet)
          isMoving = true;
        }
        if (keysRef.current.ArrowLeft) {
          player.x -= player.speed;
          player.direction = 'left';
          player.frameY = 2; // Left-facing sprites (second row in the sprite sheet)
          isMoving = true;
        }
        if (keysRef.current.ArrowRight) {
          player.x += player.speed;
          player.direction = 'right';
          player.frameY = 1; // Right-facing sprites (third row in the sprite sheet)
          isMoving = true;
        }
        
        // If any key is pressed, cancel any automatic movement
        if (isMoving) {
          player.isMovingToTarget = false;
          player.targetX = null;
          player.targetY = null;
        }
      }
      
      // Handle animation frames
      if (isMoving || player.isMovingToTarget) {
        player.frameTimer++;
        if (player.frameTimer >= player.animationSpeed) {
          player.frameTimer = 0;
          player.frameX = (player.frameX + 1) % 4; // Assuming 4 frames per animation
        }
      } else {
        // Reset to standing frame when not moving
        player.frameX = 0;
      }

      // Keep player within world boundaries
      player.x = Math.max(player.width / 2, Math.min(world.width - player.width / 2, player.x));
      player.y = Math.max(player.height / 2, Math.min(world.height - player.height / 2, player.y));
      
      // Calculate visible area based on zoom level
      const visibleWidth = canvas.width / camera.zoom;
      const visibleHeight = canvas.height / camera.zoom;
      
      // Update camera position to follow player
      camera.x = player.x - visibleWidth / 2;
      camera.y = player.y - visibleHeight / 2;
      
      // Clamp camera position to world boundaries
      camera.x = Math.max(0, Math.min(camera.x, world.width - visibleWidth));
      camera.y = Math.max(0, Math.min(camera.y, world.height - visibleHeight));

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Save context state before applying camera transform
      ctx.save();
      
      // Apply camera translation and scaling
      ctx.scale(camera.zoom, camera.zoom);
      ctx.translate(-camera.x, -camera.y);

      // Draw ocean as the bottom layer (larger than canvas to fill the world)
      ctx.drawImage(oceanImage, 0, 0, world.width, world.height);
      
      // Draw background
      ctx.drawImage(oceanImage, 0, 0, world.width, world.height);
      ctx.drawImage(backgroundImage, 0, 0, world.width, world.height);
      
      // Draw location name overlay
      ctx.font = 'bold 32px Arial';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.fillText('Location: ' + locationName, 20, 40);
      
      // Get airport reference
      const airport = airportRef.current;
      
      // Draw airport with hover effect
      ctx.save(); // Save the current state
      
      // Apply glow effect if airport is hovered
      if (airport.isHovered) {
        // Create a radial gradient for the glow effect
        const gradient = ctx.createRadialGradient(
          airport.x, airport.y, airport.width/4,
          airport.x, airport.y, airport.width
        );
        
        // Subtle blue glow when hovering
        gradient.addColorStop(0, 'rgba(100, 150, 255, 0.4)');
        gradient.addColorStop(1, 'rgba(100, 150, 255, 0)');
        
        // Draw the glow
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(airport.x, airport.y, airport.width, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Draw the airport image
      ctx.drawImage(
        airportImage, 
        0, 0, airportImage.width, airportImage.height,
        airport.x - airport.width/2, airport.y - airport.height/2, 
        airport.width, airport.height
      );
      
      // Add a visual indicator that airport is clickable when hovered
      if (airport.isHovered) {
        ctx.font = '14px Arial';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.fillText('Airport', airport.x, airport.y - airport.height/2 - 10);
      }
      
      // Restore the context state
      ctx.restore();
      
      // Get references to objects
      const lamps = lampsRef.current;
      
      // Draw all lamps
      lamps.forEach(lamp => {
        // Draw lamp standpoint with hover/click effects
        ctx.save(); // Save the current state
        
        // Apply glow effect if lamp is hovered or lit
        if (lamp.isHovered || lamp.isLit) {
          // Create a radial gradient for the glow effect
          const gradient = ctx.createRadialGradient(
            lamp.x, lamp.y, lamp.width/4,
            lamp.x, lamp.y, lamp.width
          );
          
          if (lamp.isLit) {
            // Brighter, yellow glow when lit
            gradient.addColorStop(0, 'rgba(255, 255, 150, 0.8)');
            gradient.addColorStop(1, 'rgba(255, 255, 0, 0)');
          } else {
            // Subtle glow when just hovering
            gradient.addColorStop(0, 'rgba(255, 255, 150, 0.4)');
            gradient.addColorStop(1, 'rgba(255, 255, 150, 0)');
          }
          
          // Draw the glow
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(lamp.x, lamp.y, lamp.width, 0, Math.PI * 2);
          ctx.fill();
        }
        
        // Draw the lamp image
        ctx.drawImage(
          lampImage,
          0, 0, lampImage.width, lampImage.height,
          lamp.x - lamp.width / 2, lamp.y - lamp.height / 2,
          lamp.width, lamp.height
        );
        
        // Add a visual indicator that lamp is clickable when hovered
        if (lamp.isHovered) {
          ctx.font = '14px Arial';
          ctx.fillStyle = 'white';
          ctx.textAlign = 'center';
          ctx.fillText('Click me!', lamp.x, lamp.y - lamp.height/2 - 10);
        }
        
        // Restore the context state
        ctx.restore();
      });

      // Draw player with sprite animation
      ctx.drawImage(
        playerImage,
        player.frameX * spriteWidth, // Source X - which frame in the sprite sheet
        player.frameY * spriteHeight, // Source Y - which row in the sprite sheet
        spriteWidth,
        spriteHeight,
        player.x - player.width / 2,
        player.y - player.height / 2,
        player.width,
        player.height
      );

      // Restore context to original state (remove camera translation)
      ctx.restore();
      
      // Add State Name text (fixed to screen, not world)
      ctx.fillStyle = '#7c5a3a';
      ctx.font = 'bold 24px Arial';
      ctx.fillText('Selangor', 20, 40);
      
      // Draw position and zoom info in a styled box similar to ShopTab
      const infoBoxWidth = 200;
      const infoBoxHeight = 80;
      const infoBoxX = canvas.width - infoBoxWidth - 20;
      const infoBoxY = 20;
      
      // Draw outer border (dark brown)
      ctx.fillStyle = '#a86c3c';
      ctx.fillRect(infoBoxX - 4, infoBoxY - 4, infoBoxWidth + 8, infoBoxHeight + 8);
      
      // Draw inner border (light brown)
      ctx.fillStyle = '#bfa46a';
      ctx.fillRect(infoBoxX - 2, infoBoxY - 2, infoBoxWidth + 4, infoBoxHeight + 4);
      
      // Draw background (cream)
      ctx.fillStyle = '#f7e0a3';
      ctx.fillRect(infoBoxX, infoBoxY, infoBoxWidth, infoBoxHeight);
      
      // Draw text
      ctx.fillStyle = '#7c5a3a';
      ctx.font = 'bold 14px Arial';
      ctx.fillText('LOCATION: KUALA LUMPUR', infoBoxX + 10, infoBoxY + 20);
      ctx.font = '12px Arial';

      // Continue the game loop
      animationFrameId = requestAnimationFrame(gameLoop);
    };

    // Start the game loop once images are loaded
    animationFrameId = requestAnimationFrame(gameLoop);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="w-full h-full" />
      <LandmarkInfo
        open={landmarkInfoOpen}
        setOpen={setLandmarkInfoOpen}
        landmark={currentLandmark}
      />
    </>
  );
};

export default InState2;