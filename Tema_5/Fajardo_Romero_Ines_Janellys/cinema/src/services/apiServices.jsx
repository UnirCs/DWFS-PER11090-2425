export function fetchData(url, onSuccess, onError) {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json();
        })
        .then((data) => {
            if (onSuccess) {
                onSuccess(data);
            }
        })
        .catch((error) => {
            console.error('Error al cargar los datos:', error);
            if (onError) {
                onError(error);
            }
        });
}

export function fetchDataId (url, onSuccess, onError, id) {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json();
        })
        .then((data) => {
            if (onSuccess) {
               data = data.find(x=>x.id == id);
                onSuccess(data);
            }
        })
        .catch((error) => {
            console.error('Error al cargar los datos:', error);
            if (onError) {
                onError(error);
            }
        });
}
