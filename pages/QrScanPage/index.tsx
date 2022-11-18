import { Box, Text, Button, VStack } from '@chakra-ui/react'
import React, { useEffect, useReducer, useRef } from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux';
import { MdKeyboardArrowLeft } from 'react-icons/md'

import { useRouter } from 'next/router'
import { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { RiQrScan2Line } from "react-icons/ri";
import stream from 'stream';




export const startCamera = async () => {

    stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
            facingMode: 'environment'
        }
    })
    this.$refs.video.srcObject = this.stream
};
const index = () => {

    return (
        <Box style={{ background: "linear-gradient(180deg, rgba(16,173,208,0.84) 20%, rgba(0,80,255,1) 100%)" }} >
            <Button onClick={() => startCamera}> bass</Button>

        </Box>
    )
}

export default index






