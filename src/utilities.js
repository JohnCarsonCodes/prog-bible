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

export const setActive = async (file, elementID, targetElementID) => {
    try {
        const response = await fetch(file);

        if (!response.ok) {
            throw new Error(`Failed to fetch file: ${response.statusText}`);
        }

        const content = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(content, 'text/html');
        const element = document.getElementById(elementID);

        if (!element) {
            throw new Error(`Element with ID '${elementID}' not found`);
        }

        // Inject the parsed HTML content
        element.innerHTML = doc.body.innerHTML;

        // After inserting the content, find the target element in the current document context
        const targetElement = element.querySelector(`#${targetElementID}`);
        if (targetElement) {
            targetElement.classList.add('side-active');
        } else {
            console.warn(`Target element with ID '${targetElementID}' not found in injected content`);
        }

        console.log(element.innerHTML);
    } catch (error) {
        console.error('Error:', error.message);
    }
};

export const recentUpdatesHome = async (file) => {
    try {
        const response = await fetch(file);

        if (!response.ok) {
            throw new Error(`Failed to fetch file: ${response.statusText}`);
        }

        const content = await response.text();

        console.log(content);
        return content;

    } catch (error) {
        console.error('Error:', error.message);
    }
}