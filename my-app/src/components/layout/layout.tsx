import {Link} from "react-router-dom";
import {Country} from "../../utils/types.ts";

interface LayoutProps {
    countries?: Country[] | null,
}

function Layout({countries}: LayoutProps) {

    return (
        <main>
            {
                countries && (
                    <section className="grid">
                        {
                            countries?.map((country, index) => (
                                <Link to={`/country/${country.cca3}`} key={index}>
                                    <article className="inner">
                                        <h2 className=''>{country.name.common}</h2>
                                        <img className="image" src={country.flags.png} alt={country.name.common}/>
                                    </article>
                                </Link>
                            ))
                        }
                    </section>
                )
            }
        </main>
    )
}

export default Layout;