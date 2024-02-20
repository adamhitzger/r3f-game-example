import { Box } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export default function Map() {
  return (
    <>
      <RigidBody type="fixed" name="floor" friction={1.5}>
        <Box
          position={[0, 0, 0]}
          args={[10, 1, 10]}
          material-color="springgreen"
        />
      </RigidBody>
    </>
  );
}
