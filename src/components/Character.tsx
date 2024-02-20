import { Box } from "@react-three/drei";
import {
  RigidBody,
  RapierRigidBody,
  CollisionTarget,
} from "@react-three/rapier";
import { MutableRefObject, useRef } from "react";

export default function Character({
  myref,
  onFloor,
}: Readonly<{
  myref: MutableRefObject<RapierRigidBody>;
  onFloor: MutableRefObject<boolean>;
}>) {
  return (
    <>
      <RigidBody
        position={[-2.5, 1, 0]}
        ref={myref}
        onCollisionEnter={({ other }) => {
          if (other.rigidBodyObject.name === "floor") {
            onFloor.current = true;
          }
        }}
        onCollisionExit={({ other }) => {
          if (other.rigidBodyObject.name === "floor") {
            onFloor.current = false;
          }
        }}
      >
        <Box material-color="blue" />
      </RigidBody>
    </>
  );
}
