import { Box, OrbitControls, useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody, RapierRigidBody } from "@react-three/rapier";
import { useRef } from "react";
import { Controls } from "./Scene";

export default function Expirience() {
    const box = useRef<RapierRigidBody>(null!);
    const leftPress = useKeyboardControls<Controls>(state => state.left);
    const rightPress = useKeyboardControls<Controls>(state => state.right);
    const forwardPress = useKeyboardControls<Controls>(state => state.forward);
    const backPress = useKeyboardControls<Controls>(state => state.back); 

    const handleMovement = () => {
        if(rightPress) box.current.applyImpulse({x:0.2, y:0, z:0}, true);
        if(leftPress) box.current.applyImpulse({x:-0.2, y: 0, z: 0}, true);
        if(forwardPress) box.current.applyImpulse({x:0, y: 0, z: -0.2}, true);
        if(backPress) box.current.applyImpulse({x:0, y: 0, z: 0.2}, true);
    }

    useFrame((_state, delta) => {
        handleMovement();
    })
    return (
        <>
            <ambientLight intensity={0.5}/>
            <OrbitControls/>

            <RigidBody
                position={[-2.5, 1, 0]}
                ref={box}
            >
                <Box material-color="blue"/>
            </RigidBody>

            <RigidBody type="fixed" name="floor">
                <Box position={[0,0,0]} args={[10,1,10]} material-color="springgreen"/>
            </RigidBody>
        </>
    )
}
