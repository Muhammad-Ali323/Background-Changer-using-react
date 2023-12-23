function Colors({color, textclr='black', colorChange}){
    return <button className='w-20 rounded-3xl h-9 self-center mr-5 ml-5' onClick={colorChange} style={{backgroundColor:color, color:textclr}}>{color}</button>
}
export default Colors