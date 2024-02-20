import { Box, OrbitControls, useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody, RapierRigidBody } from "@react-three/rapier";
import { useRef, useState } from "react";
import { Controls } from "./Scene";
import Map from "./Map";
import Character from "./Character";

export default function Expirience() {
  const isOnFloor = useRef(true);
  const box = useRef<RapierRigidBody>(null!);
  const leftPress = useKeyboardControls<Controls>((state) => state.left);
  const rightPress = useKeyboardControls<Controls>((state) => state.right);
  const forwardPress = useKeyboardControls<Controls>((state) => state.forward);
  const backPress = useKeyboardControls<Controls>((state) => state.back);
  const jumpPress = useKeyboardControls<Controls>((state) => state.jump);
  const leftMobile = document.getElementById("left");
  const rightMobile = document.getElementById("right");
  const forwardMobile = document.getElementById("forward");
  const backMobile = document.getElementById("back");
  const jumpMobile = document.getElementById("jump");
  const jump = () => {
    if (isOnFloor.current) {
      box.current.applyImpulse({ x: 0, y: 5, z: 0 }, true);
      isOnFloor.current = false;
    }
  };
  const handleMovement = () => {
    if (rightPress) box.current.applyImpulse({ x: 0.2, y: 0, z: 0 }, true);
    if (leftPress) box.current.applyImpulse({ x: -0.2, y: 0, z: 0 }, true);
    if (forwardPress) box.current.applyImpulse({ x: 0, y: 0, z: -0.2 }, true);
    if (backPress) box.current.applyImpulse({ x: 0, y: 0, z: 0.2 }, true);
    leftMobile?.addEventListener("click", () => {
      box.current.applyImpulse({ x: -0.05, y: 0, z: 0 }, true);
    });
    rightMobile?.addEventListener("click", () => {
      box.current.applyImpulse({ x: 0.05, y: 0, z: 0 }, true);
    });
    forwardMobile?.addEventListener("click", () => {
      box.current.applyImpulse({ x: 0, y: 0, z: -0.05 }, true);
    });
    backMobile?.addEventListener("click", () => {
      box.current.applyImpulse({ x: 0, y: 0, z: 0.05 }, true);
    });
  };

  useFrame((_state, delta) => {
    if (jumpPress) jump();
    jumpMobile?.addEventListener("click", jump);
    handleMovement();
  });
  return (
    <>
      <ambientLight intensity={0.5} />
      <OrbitControls />
      <Character myref={box} onFloor={isOnFloor} />

      <Map />
    </>
  );
}
