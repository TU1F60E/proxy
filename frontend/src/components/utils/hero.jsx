// simple hero container with heading and description
export default function Hero(props) {
    return <>
    <div className="hero flex flex-col">

        <div className="hero-info">
          <h3 className="hero-text"> {props.title} </h3>
        </div>

        <div className="text-center hero-content w-full">
          {props.children}
        </div>

    </div>
    </>
}
