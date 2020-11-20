import React from 'react';
import { BASE_URL } from '../utils';
import { useQuery } from 'react-query';
//hacer una función para hacer el fetch
const fetchEpisodes = async () => {
    const response = await fetch(`${BASE_URL}/episodes`)
    return response.json();
}
export default function Episodes() {
    //Usar el hook useQuery con la función del fetch
    const { data, status } = useQuery('episodes', fetchEpisodes);

    return (
        <section>

            <h2 className="subtitle is-size-3 has-text-centered">Episodes</h2>
            <div style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))' }}>
                {/* Mostrar los datos */}
                {status === "loading" &&
                    <div className="is-full-width is-justify-content-center is-flex">
                        <button className="button is-warning is-light">Cargando</button>
                    </div>
                }
                {
                    status === "error" &&
                    <div className="is-full-width is-justify-content-center is-flex">
                        <button className="button is-error is-light">Hubo un error</button>
                    </div>
                }
                {
                    status === "success" && data.filter(item => item.name).map(item => <SingleEpisode key={item.id} episode={item} />)
                }
            </div>
        </section>
    )
}

const SingleEpisode = ({ episode }) => {
    return (
        <div class="card">
            <div class="card-content">
                <p class="title has-text-centered">
                    {episode.name}
                </p>
                <p class="subtitle">
                    Fecha de transmisión: {episode.air_date}
                </p>
            </div>
            <footer class="card-footer">
                <p class="card-footer-item">
                    <span>
                        <b>Episodio: </b> {episode.episode}
                    </span>
                </p>
                <p class="card-footer-item">
                    <span>
                        <b>Temporada: </b> {episode.season}
                    </span>
                </p>
            </footer>
        </div>
    )
} 