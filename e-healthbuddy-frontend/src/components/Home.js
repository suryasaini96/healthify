import React from 'react'
import './cover.css'

function Home() {
    return (
        <body className="d-flex h-100 text-center text-white bg-dark">
            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                {/* <header class="mb-auto">
                    <div>
                        <h3 class="float-md-start mb-0">Cover</h3>
                        <nav class="nav nav-masthead justify-content-center float-md-end">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                            <a class="nav-link" href="#">Features</a>
                            <a class="nav-link" href="#">Contact</a>
                        </nav>
                    </div>
                </header> */}

                <main className="px-3">
                    <h1>Healthify.</h1>
                    <p className="lead">An extensive health management system serving all your needs. Track your health history with ease.</p>
                    <p className="lead">
                        <a href="#" className="btn btn-lg btn-secondary fw-bold border-white bg-white">Learn more</a>
                    </p>
                </main>
            </div>
        </body>
    )
}

export default Home
