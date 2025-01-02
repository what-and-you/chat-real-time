let userName = "";
let groupId = "";
let currentGroup = "";

function enterChat() {
    const nameInput = document.getElementById("userName").value;
    if (nameInput.trim() !== "") {
        userName = nameInput;
        document.getElementById("displayName").innerText = userName;
        document.getElementById("name-section").classList.add("hidden");
        document.getElementById("chat-section").classList.remove("hidden");
    } else {
        alert("Nama tidak boleh kosong!");
    }
}

function createGroup() {
    groupId = prompt("Masukkan ID grup baru:");
    if (groupId && groupId.trim() !== "") {
        currentGroup = groupId;
        document.getElementById("group-name").innerText = currentGroup;
        alert(`Grup ID "${groupId}" berhasil dibuat!`);
        enterChatRoom();
    }
}

function joinGroup() {
    const searchGroup = document.getElementById("searchGroup").value;
    if (searchGroup.trim() !== "") {
        currentGroup = searchGroup;
        document.getElementById("group-name").innerText = currentGroup;
        alert(`Berhasil masuk ke grup dengan ID: ${currentGroup}`);
        enterChatRoom();
    } else {
        alert("Masukkan ID grup terlebih dahulu.");
    }
}

function enterChatRoom() {
    document.getElementById("chat-box").classList.remove("hidden");
    document.getElementById("messageInput").focus();
}

function sendMessage() {
    const message = document.getElementById("messageInput").value;
    if (message.trim() !== "") {
        const messageContainer = document.createElement("div");
        messageContainer.textContent = `${userName}: ${message}`;
        document.getElementById("messages").appendChild(messageContainer);
        document.getElementById("messageInput").value = "";
        document.getElementById("messages").scrollTop = document.getElementById("messages").scrollHeight; // Scroll otomatis ke bawah
    }
}
