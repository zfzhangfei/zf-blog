function Outline({ toc }) {
    return (
      <div className="toc">
        {toc.map(item => (
          <a href={`#${item.id}`}>{item.text}</a>  
        ))}
      </div>
    )
  }