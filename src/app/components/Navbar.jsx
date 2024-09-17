// Importing the necessary modules 
import React from 'react'; 
import styles from "./Navbar.module.css"; 
import Link from 'next/link';


const Navbar = (props) => {

    // Rendering the component 
    return(
        <div className={styles.mainNav}> 
            {/* Adding the left nav bar */}
            <nav className={styles.leftNav}>
                <Link className={styles.anchor} href="/"> Home </Link>
                <Link className={styles.anchor} href="/about"> About </Link>
                <Link className={styles.anchor} href="/blog"> Blog </Link>

            </nav>


            {/* Adding the right nav */}
            <nav className={styles.rightNav}>
                <input type="search" placeholder="Search here..." className={styles.inputForm}/>
                <button className={styles.searchBtn}> Search... </button>

            </nav>
        </div>
    )
}

// Exporting the Navbar 
export default Navbar; 