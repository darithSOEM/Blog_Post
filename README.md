# Cambodian Tour Blog App

A very small blog-post app built with plain HTML, CSS and JavaScript. No frameworks, no build step. You can add, update and delete posts, which are shown as cards in a 4-column grid.

## Project Structure

```
.
├── index.html   # Page structure (container, header, Add Post button, posts area)
├── style.css    # Styling (container, 4-column grid, cards)
└── app.js       # All logic and the initial posts array
```

To run it, put the files in the same folder and open `index.html` in a browser.

## How It Works

### 1. Data

All posts live in one array called `posts` at the top of `app.js`. Each post is an object:

```javascript
{ id: 1, title: "Angkor Wat Sunrise", content: "..." }
```

- `id` is a unique number used to find the post when updating or deleting.
- `title` is the post title.
- `content` is the post text.

A variable `nextId` keeps track of the next free id for new posts.

### 2. Rendering

The `render()` function does the display work:

1. It clears the `#posts` div.
2. It loops through the `posts` array.
3. For each post it builds a card containing the title, the Update Title button, the content, and the Update Content and Delete buttons.

Every time the array changes, `render()` is called again so the page always matches the data.

### 3. Actions

| Action | Button | What happens |
| --- | --- | --- |
| Add | **Add Post** (top right) | Asks for a title with `prompt()`, then for the content, and pushes a new object into the array with `nextId`. |
| Update title | **Update Title** (next to the title) | Opens a prompt pre-filled with the current title and saves the new value. |
| Update content | **Update Content** (bottom of the card) | Opens a prompt pre-filled with the current content and saves the new value. |
| Delete | **Delete** (bottom of the card) | Removes the post from the array with `filter()`. |

If you press Cancel on any prompt, nothing changes.

### 4. Layout and Styling

- `.container` centers the page with a max width of 1200px.
- `#posts` is a CSS grid with 4 equal columns.
- Each post is a `.card`, a white box with a border and rounded corners.
- On smaller screens the grid drops to 2 columns (below 900px) and 1 column (below 500px).

## Initial Data

When the page first loads, these 4 posts are shown, one per card, filling one row of the grid:

| ID | Title | Content |
| --- | --- | --- |
| 1 | Angkor Wat Sunrise | Wake up before dawn in Siem Reap and watch the sun rise behind the towers of Angkor Wat, the largest religious monument in the world. |
| 2 | Phnom Penh City Tour | Visit the Royal Palace, Silver Pagoda and the National Museum, then enjoy the riverside along the Tonle Sap and Mekong. |
| 3 | Kampot and Kep Getaway | Relax in the quiet riverside town of Kampot, explore pepper plantations, and taste fresh Kep crab at the seaside market. |
| 4 | Koh Rong Island Escape | Take a boat from Sihanoukville to Koh Rong for white sand beaches, clear water, snorkeling and glowing plankton at night. |

`nextId` starts at `5`, so the first post you add gets id 5.

## Limitations

- Posts are stored only in memory. Refreshing the page resets everything to the 4 initial posts.
- Input is collected with the browser's `prompt()` dialogs.

## Ideas for Next Steps

- Save posts with `localStorage` so changes survive a refresh.
- Replace `prompt()` with a proper form or modal.
- Add dates or categories to each post.
