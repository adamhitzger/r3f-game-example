import { Box } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export default function Map() {
  return (
    <>
        <RigidBody type="fixed" name="floor">
                <Box position={[0,0,0]} args={[10,1,10]} material-color="springgreen"/>
            </RigidBody>
    </>
  )
}
