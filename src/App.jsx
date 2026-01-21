import Header from "./components/Header/Header";
import Examples from "./components/Examples.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>


      export default function Button({children, mode ='filled', Icon, ...props}) {
 
 const classes = `button ${mode}-button ${Icon ? 'icon-button' : ''}`;

    return(
            <button className={classes} {...props}>
                {Icon && (<span className="button-icon">
                <Icon /></span>)}
                
                <span>{children}</span>
            </button>
        )
 
 
}



    </>
  );
}
