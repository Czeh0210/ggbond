'use client';

import { useEffect, useRef } from 'react';

const InState = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Define lamp object
  const lampRef = useRef<{
    x: number;
    y: number;
    width: number;
    height: number;
    isHovered: boolean;
    isLit: boolean;
  }>({ 
    x: 1060, 
    y: 308, 
    width: 96, 
    height: 96,
    isHovered: false,
    isLit: false
  });
  
  // Camera reference for tracking the view position
  const cameraRef = useRef<{
    x: number;
    y: number;
  }>({ 
    x: 0, 
    y: 0
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
    x: 288, 
    y: 508, 
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
      x: playerRef.current.x - canvas.width / 2,
      y: playerRef.current.y - canvas.height / 2
    };

    // Load background image
    const backgroundImage = new Image();
    backgroundImage.src = '/map/State Background2.png';

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
    
    // Mouse event handlers for lamp interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      // Scale mouse position if canvas is being displayed at a different size than its internal dimensions
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      
      const scaledX = mouseX * scaleX;
      const scaledY = mouseY * scaleY;
      
      const lamp = lampRef.current;
      const camera = cameraRef.current;
      
      // Adjust mouse position for camera offset
      const worldMouseX = scaledX + camera.x;
      const worldMouseY = scaledY + camera.y;
      
      // Check if mouse is over the lamp
      const distX = Math.abs(worldMouseX - lamp.x);
      const distY = Math.abs(worldMouseY - lamp.y);
      
      lamp.isHovered = distX < lamp.width/2 && distY < lamp.height/2;
    };
    
    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      // Scale mouse position
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      
      const scaledX = mouseX * scaleX;
      const scaledY = mouseY * scaleY;
      
      const lamp = lampRef.current;
      const camera = cameraRef.current;
      
      // Adjust mouse position for camera offset
      const worldMouseX = scaledX + camera.x;
      const worldMouseY = scaledY + camera.y;
      
      // Check if click is on the lamp
      const distX = Math.abs(worldMouseX - lamp.x);
      const distY = Math.abs(worldMouseY - lamp.y);
      
      if (distX < lamp.width/2 && distY < lamp.height/2) {
        // Toggle lamp lit state
        lamp.isLit = !lamp.isLit;
        
        // Set player target to move to lamp position
        const player = playerRef.current;
        player.targetX = lamp.x;
        player.targetY = lamp.y;
        player.isMovingToTarget = true;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('click', handleClick);

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
              player.frameY = 2;
            } else {
              player.x -= player.speed;
              player.direction = 'left';
              player.frameY = 1;
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
      
      // Update camera position to follow player
      camera.x = player.x - canvas.width / 2;
      camera.y = player.y - canvas.height / 2;
      
      // Clamp camera position to world boundaries
      camera.x = Math.max(0, Math.min(camera.x, world.width - canvas.width));
      camera.y = Math.max(0, Math.min(camera.y, world.height - canvas.height));

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Save context state before applying camera transform
      ctx.save();
      
      // Apply camera translation
      ctx.translate(-camera.x, -camera.y);

      // Draw background (larger than canvas to fill the world)
      ctx.drawImage(backgroundImage, 0, 0, world.width, world.height);
      
      // Draw lamp standpoint with hover/click effects
      const lamp = lampRef.current;
      
      // Save the current context state
      ctx.save();
      
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
      
      // Add instructions text (fixed to screen, not world)
      ctx.fillStyle = 'black';
      ctx.font = '16px Arial';
      ctx.fillText('Use arrow keys to move', 20, 30);
      ctx.fillText(`Position: X:${Math.round(player.x)}, Y:${Math.round(player.y)}`, 20, 50);

      // Continue the game loop
      requestAnimationFrame(gameLoop);
    };

    // Start the game loop once images are loaded
    let imagesLoaded = 0;
    const totalImages = 3; // Updated to include lamp image

    const handleImageLoad = () => {
      imagesLoaded++;
      if (imagesLoaded === totalImages) {
        gameLoop();
      }
    };

    backgroundImage.onload = handleImageLoad;
    playerImage.onload = handleImageLoad;
    lampImage.onload = handleImageLoad;

    // Cleanup function
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('click', handleClick);
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
    </div>
  );
};

export default InState;