'use client';

import { useEffect, useRef, useState, useContext } from 'react';
import LandmarkInfo, { LandmarkData } from '../components/LandMarkTab';
import { LocationContext } from '../components/LocationContext';

// Define data for landmarks in this state
const landmarks: { [key: string]: LandmarkData } = {
  sultanIbrahimBuilding: {
    name: 'Sultan Ibrahim Building',
    location: 'Johor Bahru',
    type: 'default',
    mainImage: '/assets/tangible/SultanMosque.png',
    info: {
      description: 'A former state secretariat building, it is a major landmark in Johor Bahru.',
      stats: [
        // { label: 'Style', value: 'Sultanate & Colonial' },
        // { label: 'Built', value: '1940' },
      ],
    },
    history: {
      title: 'A Symbol of Sovereignty',
      text: 'The Sultan Ibrahim Building was once the tallest building in Johor Bahru and was used by the Japanese as a fortress during WWII.',
    },
    photos: ['/assets/tangible/SultanIbrahimBuilding.png'],
  },
  airport: {
    name: 'Senai International Airport',
    location: 'Senai, Johor',
    type: 'airport',
    mainImage: '/map/airportpixel.png',
    info: {
      description: 'The main airport serving Johor and the southern region of Peninsular Malaysia.',
      stats: [
        { label: 'IATA Code', value: 'JHB' },
        { label: 'Opened', value: '1974' },
      ],
    },
    history: {
      title: 'Southern Gateway',
      text: 'Established in 1974, Senai Airport has grown into a vital hub for both domestic and international travel in the region.',
    },
    photos: ['/map/airportpixel.png'],
  },
  oldTempleParade: {
    name: 'Old Temple Parade',
    location: 'Johor Bahru',
    type: 'default',
    mainImage: '/assets/tangible/TempleParade.png',
    info: {
      description: 'A vibrant and historic annual parade celebrating local deities and culture.',
      stats: [
        // { label: 'Festival', value: 'Chingay' },
        // { label: 'Started', value: '1870' },
      ],
    },
    history: {
      title: 'A Century of Celebration',
      text: 'The Johor Bahru Old Chinese Temple holds an annual Chingay parade, a tradition that has been celebrated for over 150 years, showcasing the unity of the local Chinese clans.',
    },
    photos: ['/assets/tangible/TempleParade.png'],
  },
  deepavali: {
    name: 'Deepavali Festival',
    location: 'Johor Bahru',
    type: 'default',
    mainImage: '/assets/festivals/deepavali.png',
    info: {
      description: 'The festival of lights, celebrating the victory of light over darkness.',
      stats: [{ label: '', value: '' }],
    },
    history: {
      title: 'A Celebration of Light',
      text: 'Deepavali is one of Malaysia\'s most vibrant festivals, celebrated with open houses, delicious food, and colorful lights.',
    },
    photos: ['/assets/festivals/deepavali.png'],
  },
  hariRayaHaji: {
    name: 'Hari Raya Haji',
    location: 'Johor Bahru',
    type: 'default',
    mainImage: '/assets/festivals/HariRaya.png',  
    info: {
      description: 'The festival of sacrifice, commemorating the willingness of Ibrahim to sacrifice his son.',
      stats: [{ label: '', value: '' }],
    },
    history: {
      title: 'A Day of Sacrifice',
      text: 'Hari Raya Haji is a significant religious day celebrated with prayers, charity, and the sharing of food.',
    },
    photos: ['/assets/festivals/HariRaya.png'],
  },
  hariRayaAidilfitri: {
    name: 'Hari Raya Aidilfitri',
    location: 'Johor Bahru',
    type: 'default',
    mainImage: '/assets/festivals/hariaidilfiltri.png',
    info: {
      description: 'The festival marking the end of Ramadan, the month of fasting.',
      stats: [{ label: '', value: '' }],
    },
    history: {
      title: 'A Time for Forgiveness',
      text: 'A joyous celebration filled with feasting, family reunions, and seeking forgiveness from elders.',
    },
    photos: ['/assets/festivals/hariaidilfiltri.png'],
  },
  chineseNewYear: {
    name: 'Chinese New Year',
    location: 'Johor Bahru',
    type: 'default',
    mainImage: '/assets/festivals/chinesenewyear.png',
    info: {
      description: 'A festival that celebrates the beginning of a new year on the traditional lunisolar Chinese calendar.',
      stats: [{ label: '', value: '' }],
    },
    history: {
      title: 'Spring Festival',
      text: 'Characterized by red lanterns, lion dances, and family gatherings to usher in luck and prosperity for the new year.',
    },
    photos: ['/assets/festivals/chinesenewyear.png'],
  },
};

const InState = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [landmarkInfoOpen, setLandmarkInfoOpen] = useState(false);
  const [currentLandmark, setCurrentLandmark] = useState<LandmarkData | null>(null);
  const [currentLandmarkImage, setCurrentLandmarkImage] = useState<string>("/assets/tangible/SultanMosque.png");
  const { setHasFlightTicket, setNotification } = useContext(LocationContext);
  // Define lamp objects with IDs
  const lampsRef = useRef<Array<{
    x: number;
    y: number;
    width: number;
    height: number;
    isHovered: boolean;
    isLit: boolean;
    id: string; // Link to landmark data
  }>>([{ 
    x: 1060, 
    y: 308, 
    width: 96, 
    height: 96,
    isHovered: false,
    isLit: false,
    id: 'deepavali'
  },
  { 
    x: 466, 
    y: 568, 
    width: 96, 
    height: 96,
    isHovered: false,
    isLit: false,
    id: 'hariRayaHaji'
  },
  { 
    x: 564, 
    y: 250, 
    width: 96, 
    height: 96,
    isHovered: false,
    isLit: false,
    id: 'hariRayaAidilfitri'
  },
  { 
    x: 204, 
    y: 394, 
    width: 96, 
    height: 96,
    isHovered: false,
    isLit: false,
    id: 'chineseNewYear'
  },
  { 
    x: 1300, 
    y: 600, 
    width: 96, 
    height: 96,
    isHovered: false,
    isLit: false,
    id: 'oldTempleParade'
  },
  { 
    x: 790, 
    y: 748, 
    width: 96, 
    height: 96,
    isHovered: false,
    isLit: false,
    id: 'sultanIbrahimBuilding'
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
  
  // Airport reference with ID
  const airportRef = useRef<{
    x: number;
    y: number;
    width: number;
    height: number;
    isHovered: boolean;
    id: string;
  }>({ 
    x: 826, 
    y: 578, 
    width: 0, 
    height: 0,
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
    x: 1158, 
    y: 778, 
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
    backgroundImage.src = '/map/Johor.png';
    
    // Load airport image
    const airportImage = new Image();
    airportImage.src = '/map/airport.png';
    airportImage.onload = () => {
      // Set the airport dimensions based on the scaled image size
      airportRef.current.width = airportImage.width * 0.2;
      airportRef.current.height = airportImage.height * 0.2;
      handleImageLoad();
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
      
      if (airportDistX < airport.width/2 && airportDistY < airport.height/2) {
        airport.isHovered = true;
        return; // If hovering over airport, don't check lamps
      }
      
      // Check if mouse is over any lamp
      for (const lamp of lamps) {
        const distX = Math.abs(worldMouseX - lamp.x);
        const distY = Math.abs(worldMouseY - lamp.y);
        
        if (distX < lamp.width/2 && distY < lamp.height/2) {
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

          // If this is the temple parade lamp, grant a flight ticket
          if (lamp.id === 'oldTempleParade') {
            setHasFlightTicket(true);
            setNotification('🎫 Flight Ticket Acquired!');
          }
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
      
      // Draw background (larger than canvas to fill the world)
      ctx.drawImage(backgroundImage, 0, 0, world.width, world.height);
      
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
      ctx.fillText('Johor', 20, 40);
      
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
      ctx.fillText('LOCATION: JOHOR BAHRU', infoBoxX + 10, infoBoxY + 20);
      ctx.font = '12px Arial';
      ctx.fillText(`Position: X:${Math.round(player.x)}, Y:${Math.round(player.y)}`, infoBoxX + 10, infoBoxY + 40);
      ctx.fillText(`Zoom: ${camera.zoom.toFixed(1)}x (Mouse wheel to zoom)`, infoBoxX + 10, infoBoxY + 60);

      // Continue the game loop
      animationFrameId = requestAnimationFrame(gameLoop);
    };

    // Start the game loop once images are loaded
    let imagesLoaded = 0;
    const totalImages = 4; // Ocean, background, player, and lamp images (airport handled separately)

    const handleImageLoad = () => {
      imagesLoaded++;
      if (imagesLoaded === totalImages) {
        gameLoop();
      }
    };

    oceanImage.onload = handleImageLoad;
    backgroundImage.onload = handleImageLoad;
    playerImage.onload = handleImageLoad;
    lampImage.onload = handleImageLoad;
    // Note: airportImage.onload is handled separately to set dimensions

    // Cleanup function
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('click', handleClick);
      canvas.removeEventListener('wheel', handleWheel);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="game-container" style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <canvas 
        ref={canvasRef} 
        style={{ 
          border: '1px solid #000',
          maxWidth: '100%',
          maxHeight: '100%'
        }}
      />
      <LandmarkInfo 
        open={landmarkInfoOpen} 
        setOpen={setLandmarkInfoOpen} 
        landmark={currentLandmark}
      />
    </div>
  );
};

export default InState;