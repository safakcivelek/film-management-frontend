//FilmList Componenti

import films from "../../data/film";


function FilmList() {
    return (
        <div>
            <h1>Filmler Listesi</h1>
            <p>Hoş geldiniz! Bu bizim React uygulamamızın Film listeleme sayfasıdır.</p>
            <ul>
                {films.map(film => (
                    <li key={film.id}>
                        {film.title} ({film.year}) - Yönetmen {film.director}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FilmList;