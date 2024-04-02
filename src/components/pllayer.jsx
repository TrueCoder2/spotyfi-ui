import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function Pllayer(){
    return( 
        <>
            <div className=" w-auto">
            <AudioPlayer
             autoPlay
             src="http://example.com/audio.mp3"
             onPlay={e => console.log("onPlay")}
             className='bg-[#000000] '
            />
            </div>
            </>
    )
    
    }
    
    export default Pllayer