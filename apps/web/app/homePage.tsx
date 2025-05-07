import styles from './homePage.module.css'
import SignIn from '@repo/ui/SignIn'
import Signup from '@repo/ui/SignUp'

export default  function HomePageShopJacket () {

    return (
    <>
        <div className={styles.container}>
        
            <header className = {styles.header}>
                <h1>Lightly padded, <br/>
                quality jacket in <br/>recyled polyster</h1>

                <article className = {styles.article}>
                    <p>
                        Exclusive brands aspire for the label haute <br/>
                        couture, but the term is technically limited to <br/>
                        memtHs of the Chambre Syndicate de la Haute
                    </p>
                    <aside className = {styles.right}>
                        <div className = {styles.elem2}>
                        <a href='#'>Add to cart</a>
                        <i className="ri-arrow-right-up-line"></i>
                        </div>
                        <div className = {styles.elem2}>
                        <a href='#'>Product details</a>
                        <i className="ri-arrow-right-up-line"></i>
                        </div> <div className = {styles.elem2}>
                        <a href='#'>Shipping</a>
                        <i className="ri-arrow-right-up-line"></i>
                        </div>
                    </aside>
                </article>
               
            </header>
            <div className = {styles.helloContainer}></div>

        </div>
    </>)

}