

const MediaAccount = ({ src, onSelect, name, selected }) => {
    function handleClick() {
        onSelect(name)
    }

  return (
      <>
          <div className="box">
              <img src={src} alt="" className={`media-img ${selected ? 'selected' : ''}`} onClick={handleClick} />
          </div>
      </>
  )
}

export default MediaAccount