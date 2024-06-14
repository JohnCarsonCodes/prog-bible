export const navInsert = async (file, elementId) => {
    try {
        const response = await fetch(file);

        if (!response.ok) {
            throw new Error(`Failed to fetch file: ${response.statusText}`);
        }

        const content = await response.text();
        const element = document.getElementById(elementId);

        if (!element) {
            throw new Error(`Element with ID '${elementId}' not found`);
        }

        element.innerHTML = content;
    } catch (error) {
        console.error('Error:', error.message);
    }
};

export const crumbsInsert = async (file, elementId) => {
    try {
        const response = await fetch(file);

        if (!response.ok) {
            throw new Error(`Failed to fetch file: ${response.statusText}`);
        }

        const content = await response.text();
        const element = document.getElementById(elementId);

        if (!element) {
            throw new Error(`Element with ID '${elementId}' not found`);
        }

        element.innerHTML = content;
    } catch (error) {
        console.error('Error:', error.message);
    }
};