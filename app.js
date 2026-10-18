// Initial posts
let posts = [
  {
    id: 1,
    title: "Angkor Wat Sunrise",
    content: "Wake up before dawn in Siem Reap and watch the sun rise behind the towers of Angkor Wat, the largest religious monument in the world.",
  },
  {
    id: 2,
    title: "Phnom Penh City Tour",
    content: "Visit the Royal Palace, Silver Pagoda and the National Museum, then enjoy the riverside along the Tonle Sap and Mekong.",
  },
  {
    id: 3,
    title: "Kampot and Kep Getaway",
    content: "Relax in the quiet riverside town of Kampot, explore pepper plantations, and taste fresh Kep crab at the seaside market.",
  },
  {
    id: 4,
    title: "Koh Rong Island Escape",
    content: "Take a boat from Sihanoukville to Koh Rong for white sand beaches, clear water, snorkeling and glowing plankton at night.",
  },
];

let nextId = 4;

const postsDiv = document.getElementById("posts");
const addBtn = document.getElementById("addBtn");

// Add a new post
addBtn.addEventListener("click", () => {
  const title = prompt("Enter post title:");
  if (title === null) return; // cancelled
  const content = prompt("Enter post content:");
  if (content === null) return; // cancelled

  posts.push({ id: nextId++, title, content });
  render();
});

// Update title
function updateTitle(id) {
  const post = posts.find((p) => p.id === id);
  const newTitle = prompt("Enter new title:", post.title);
  if (newTitle === null) return;
  post.title = newTitle;
  render();
}

// Update content
function updateContent(id) {
  const post = posts.find((p) => p.id === id);
  const newContent = prompt("Enter new content:", post.content);
  if (newContent === null) return;
  post.content = newContent;
  render();
}

// Delete post
function deletePost(id) {
  posts = posts.filter((p) => p.id !== id);
  render();
}

// Show posts on the page
function render() {
  postsDiv.innerHTML = "";

  posts.forEach((post) => {
    const div = document.createElement("div");
    div.className = "card";

    const h2 = document.createElement("h2");
    h2.textContent = post.title;

    const p = document.createElement("p");
    p.textContent = post.content;

    const titleBtn = document.createElement("button");
    titleBtn.textContent = "Update Title";
    titleBtn.onclick = () => updateTitle(post.id);

    const contentBtn = document.createElement("button");
    contentBtn.textContent = "Update Content";
    contentBtn.onclick = () => updateContent(post.id);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => deletePost(post.id);

    const actions = document.createElement("div");
    actions.className = "actions";
    actions.append(contentBtn, deleteBtn);

    const titleRow = document.createElement("div");
    titleRow.className = "title-row";
    titleRow.append(h2, titleBtn);

    div.append(titleRow, p, actions);
    postsDiv.appendChild(div);
  });
}

render();