import { Box } from '@react-three/drei'
import { RigidBody, RapierRigidBody } from '@react-three/rapier'
import { MutableRefObject } from 'react';

export default function Character({
    myref,
}: Readonly<{
    myref: MutableRefObject<RapierRigidBody>;
}>) {
  return (
    <>
            <RigidBody
                position={[-2.5, 1, 0]}
                ref={myref}
            >
                <Box material-color="blue"/>
            </RigidBody>
    </>
  )
}
