async function register(user) {
    const response = await fetch("http://127.0.0.1:8000/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Registration failed");
    }
    return response.json();
}

async function login(email, password, role) {
    const response = await fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password, role })
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Login failed");
    }
    return response.json();
}

async function updateProfile(user, token) {
    const response = await fetch("http://127.0.0.1:8000/update-profile", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token ? `Bearer ${token}` : ""
        },
        body: JSON.stringify(user)
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Failed to update profile");
    }
    return response.json();
}

async function getCrops(token) {
    const response = await fetch("http://127.0.0.1:8000/crops", {
        method: "GET",
        headers: {
            "Authorization": token ? `Bearer ${token}` : ""
        }
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Failed to fetch crops");
    }
    return response.json();
}

async function addCrop(crop, token) {
    const response = await fetch("http://127.0.0.1:8000/crops", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token ? `Bearer ${token}` : ""
        },
        body: JSON.stringify(crop)
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Failed to add crop");
    }
    return response.json();
}

async function deleteCrop(cropId, token) {
    const response = await fetch(`http://127.0.0.1:8000/crops/${cropId}`, {
        method: "DELETE",
        headers: {
            "Authorization": token ? `Bearer ${token}` : ""
        }
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Failed to delete crop");
    }
    return response.json();
}

async function placeOrder(order, token) {
    const response = await fetch("http://127.0.0.1:8000/orders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token ? `Bearer ${token}` : ""
        },
        body: JSON.stringify(order)
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Failed to place order");
    }
    return response.json();
}

async function getOrders(token) {
    const response = await fetch("http://127.0.0.1:8000/orders", {
        method: "GET",
        headers: {
            "Authorization": token ? `Bearer ${token}` : ""
        }
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Failed to fetch orders");
    }
    return response.json();
}