import React from 'react';
import { BASE_URL } from '../utils';
import { useQuery } from 'react-query';
//hacer una función para hacer el fetch
const fetchCharacters = async (key, params) => {
    const response = await fetch(`${BASE_URL}/characters`)
    return response.json();
}
export default function Characters() {
    //Usar el hook useQuery con la función del fetch
    const { data, status } = useQuery(['characters'], fetchCharacters);

    return (
        <section>

            <h2 className="subtitle is-size-3 has-text-centered">Characters</h2>
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
                    status === "success" && data.filter(item => item.name).map(item => <SingleCharacter key={item.id} character={item} />)
                }
            </div>
        </section>
    )
}

const SingleCharacter = ({ character }) => {
    return (
        <div class="card">
            <div class="card-image">
                <figure class="image is-4by3">
                    <img src={character.image} alt="Placeholder image" />
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4">{character.name}</p>
                        <p class="subtitle is-6">@{character.name?.split(' ').join('_')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
} 