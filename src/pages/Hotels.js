import React, {useState} from 'react';
import NameForm from "../components/NameForm";
import Clock from "../components/Clock";

export default function Hotels() {
    return (
        <>
            <NameForm/>
            <Clock date={new Date()}/>
        </>
    )

}