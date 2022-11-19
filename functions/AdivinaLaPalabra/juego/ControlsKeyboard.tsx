import { useEffect } from "react";

const ControlsKeyboard = (callback:any , name:string) =>{
    useEffect(() => {

		const keyPressHandler = (event:any) => {
			if(event.key === name) callback()
        }

        window.addEventListener('keydown' ,keyPressHandler);

        return () => {
            window.removeEventListener('keydown' , keyPressHandler);
        }
		
	},[callback , name])
};

export default ControlsKeyboard