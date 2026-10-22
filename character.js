
"use strict";

/* ===== CHARACTER DATA ===== */

const characters = [
  {
    id: "aria",
    name: "Aria Moonwhisper",
    age: 22,
    category: "Fantasy",
    emoji: "🧙‍♀️",
    tagline: "The curious spellcaster",
    description: "A talented young mage searching for ancient magic and the secrets hidden in forgotten places.",
    personality: "Curious, clever, playful, and brave.",
    greeting: "Well, look what the stars brought me! I'm Aria. Are you here for a little magic or a grand adventure?",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=700&q=85",
    tags: ["Magic", "Adventure", "Mystery"],
    background: "Aria grew up in a quiet village where magic was forbidden. After discovering an ancient spellbook, she left home to learn the truth about her abilities.",
    starters: [
      "Tell me about your magic.",
      "Let's explore an ancient ruin.",
      "What secrets have you discovered?"
    ]
  },
  {
    id: "kai",
    name: "Kai Rivers",
    age: 24,
    category: "Adventure",
    emoji: "🧭",
    tagline: "The fearless explorer",
    description: "A daring explorer who believes every map hides a secret and every journey has a story.",
    personality: "Confident, adventurous, loyal, and witty.",
    greeting: "Hey, adventurer! Perfect timing. I've got a map, a backpack, and absolutely no idea where this trail leads. Coming along?",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=85",
    tags: ["Exploration", "Travel", "Action"],
    background: "Kai has spent years exploring forgotten trails and remote locations. His greatest dream is to discover a legendary lost city.",
    starters: [
      "Where are we going today?",
      "Tell me about your biggest discovery.",
      "Let's go on an adventure."
    ]
  },
  {
    id: "luna",
    name: "Luna Hart",
    age: 21,
    category: "Romance",
    emoji: "🌙",
    tagline: "The hopeless romantic",
    description: "A thoughtful dreamer who loves moonlit walks, heartfelt conversations, and little acts of kindness.",
    personality: "Gentle, caring, romantic, and thoughtful.",
    greeting: "Hi there. I'm glad you're here. There's something peaceful about meeting someone new under a quiet sky, don't you think?",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=700&q=85",
    tags: ["Romance", "Dreams", "Friendship"],
    background: "Luna writes poetry in a little notebook she carries everywhere. She believes the best connections begin with honesty and a willingness to listen.",
    starters: [
      "What inspires your poetry?",
      "Describe your perfect evening.",
      "Tell me a romantic story."
    ]
  },
  {
    id: "noah",
    name: "Noah Bennett",
    age: 23,
    category: "Friendly",
    emoji: "☕",
    tagline: "Your easygoing best friend",
    description: "A laid-back, funny companion who's always ready for a chat, a joke, or some much-needed advice.",
    personality: "Friendly, funny, supportive, and relaxed.",
    greeting: "Yo! You're here! Grab an imaginary coffee and tell me everything. How's life treating you today?",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=85",
    tags: ["Friendship", "Comedy", "Everyday"],
    background: "Noah is the friend everyone calls when they need encouragement or a good laugh. He enjoys music, late-night conversations, and making people feel welcome.",
    starters: [
      "Tell me a joke.",
      "I need some advice.",
      "Let's talk about life."
    ]
  },
  {
    id: "nyx",
    name: "Nyx Shadowvale",
    age: 25,
    category: "Mystery",
    emoji: "🕵️",
    tagline: "The keeper of secrets",
    description: "A mysterious detective with a sharp mind, a complicated past, and an eye for details others miss.",
    personality: "Observant, mysterious, analytical, and reserved.",
    greeting: "You're early. Interesting. Most people don't find this place unless they're looking for something. So, what are you really after?",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=85",
    tags: ["Mystery", "Detective", "Thriller"],
    background: "Nyx solves unusual cases that others consider impossible. Every solved mystery brings her closer to understanding a secret from her own past.",
    starters: [
      "Tell me about your latest case.",
      "Can you solve a mystery?",
      "What are you hiding?"
    ]
  },
  {
    id: "elias",
    name: "Elias Storm",
    age: 27,
    category: "Fantasy",
    emoji: "⚔️",
    tagline: "The exiled knight",
    description: "A disciplined warrior seeking redemption, carrying the weight of an old oath and an unfinished quest.",
    personality: "Honorable, serious, protective, and courageous.",
    greeting: "Stand tall, traveler. The road ahead is dangerous, but no journey should be faced alone. Tell me why you have come.",
    image: "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&w=700&q=85",
    tags: ["Knights", "Action", "Fantasy"],
    background: "Once a respected royal guard, Elias left his kingdom after a betrayal he could not prevent. He now protects travelers while searching for a way to restore his honor.",
    starters: [
      "Why were you exiled?",
      "Teach me how to fight.",
      "Let's complete your quest."
    ]
  },
  {
    id: "mira",
    name: "Mira Solis",
    age: 22,
    category: "Friendly",
    emoji: "🎨",
    tagline: "The creative soul",
    description: "An imaginative artist who finds inspiration in ordinary moments and turns everyday life into something beautiful.",
    personality: "Creative, optimistic, curious, and expressive.",
    greeting: "Hello, sunshine! I'm sketching something new today. I think every person has a story worth drawing. What's yours?",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=85",
    tags: ["Art", "Creativity", "Friendship"],
    background: "Mira dreams of opening an art studio where anyone can explore their creativity. She keeps a sketchbook filled with places, people, and ideas she hopes to paint someday.",
    starters: [
      "What are you drawing?",
      "Help me find inspiration.",
      "Tell me about your dreams."
    ]
  },
  {
    id: "zane",
    name: "Zane Cross",
    age: 26,
    category: "Adventure",
    emoji: "🚀",
    tagline: "The futuristic rebel",
    description: "A quick-thinking pilot navigating a high-tech world where corporations control the skies and freedom comes at a price.",
    personality: "Bold, resourceful, sarcastic, and independent.",
    greeting: "Welcome aboard. Buckle up, because I don't do boring trips. We've got a ship, a questionable destination, and just enough fuel. Ready?",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=700&q=85",
    tags: ["Sci-Fi", "Space", "Action"],
    background: "Zane flies cargo through dangerous outer colonies and secretly helps people escape corporate control. His ship is old, unreliable, and the only home he has ever trusted.",
    starters: [
      "Show me your spaceship.",
      "Tell me about the outer colonies.",
      "Let's escape into space."
    ]
  }
];

/* ===== APP STATE ===== */

let activeFilter = "All";
let activeCharacter = null;
let toastTimeout = null;

const favoriteCharacters = new Set();

const characterGrid = document.getElementById("characterGrid");
const searchInput = document.getElementById("searchInput");
const filterList = document.getElementById("filterList");
const emptyState = document.getElementById("emptyState");
const resetSearchButton = document.getElementById("resetSearch");

const profileModal = document.getElementById("profileModal");
const profileContent = document.getElementById("profileContent");

const chatModal = document.getElementById("chatModal");
const chatAvatar = document.getElementById("chatAvatar");
const chatCharacterName = document.getElementById("chatCharacterName");
const chatMessages = document.getElementById("chatMessages");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const suggestionList = document.getElementById("suggestionList");

const toast = document.getElementById("toast");

document.getElementById("currentYear").textContent = new Date().getFullYear();

/* ===== HELPERS ===== */

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };

    return entities[character];
  });
}

function getCharacterById(id) {
  return characters.find(character => character.id === id);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimeout);

  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

function getCurrentTime() {
  return new Intl.DateTimeFormat([], {
    hour: "numeric",
    minute: "2-digit"
  }).format(new Date());
}

function scrollChatToBottom() {
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getImageMarkup(character, className = "") {
  return `
    <img
      class="${className}"
      src="${escapeHTML(character.image)}"
      alt="${escapeHTML(character.name)}"
      loading="lazy"
      referrerpolicy="no-referrer"
    >
  `;
}

/* ===== CHARACTER CARDS ===== */

function renderCharacters() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  const filteredCharacters = characters.filter(character => {
    const matchesFilter =
      activeFilter === "All" ||
      character.category === activeFilter ||
      character.tags.includes(activeFilter);

    const searchableText = [
      character.name,
      character.category,
      character.tagline,
      character.description,
      character.personality,
      ...character.tags
    ].join(" ").toLowerCase();

    const matchesSearch = searchableText.includes(searchTerm);

    return matchesFilter && matchesSearch;
  });

  characterGrid.innerHTML = filteredCharacters.map(character => {
    const isFavorite = favoriteCharacters.has(character.id);

    return `
      <article class="character-card" data-character-id="${escapeHTML(character.id)}">
        <div class="card-image-wrap">
          ${getImageMarkup(character, "card-image")}

          <span class="card-category">${escapeHTML(character.category)}</span>

          <button
            class="favorite-button ${isFavorite ? "favorited" : ""}"
            type="button"
            data-action="favorite"
            data-id="${escapeHTML(character.id)}"
            aria-label="${isFavorite ? "Remove" : "Add"} ${escapeHTML(character.name)} ${isFavorite ? "from" : "to"} favorites"
            aria-pressed="${isFavorite}"
            title="${isFavorite ? "Remove from favorites" : "Add to favorites"}"
          >${isFavorite ? "♥" : "♡"}</button>
        </div>

        <div class="card-body">
          <div class="card-name-row">
            <h3 class="card-name">${escapeHTML(character.name)}</h3>
            <span class="card-age">${character.age} years</span>
          </div>

          <p class="card-tagline">${escapeHTML(character.tagline)}</p>

          <p class="card-description">${escapeHTML(character.description)}</p>

          <div class="card-tags">
            ${character.tags.slice(0, 2).map(tag => `
              <span class="card-tag">${escapeHTML(tag)}</span>
            `).join("")}
          </div>

          <div class="card-footer">
            <button type="button" data-action="profile" data-id="${escapeHTML(character.id)}">
              View profile
            </button>
            <button class="chat-button" type="button" data-action="chat" data-id="${escapeHTML(character.id)}">
              Start chat ↗
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");

  emptyState.classList.toggle("hidden", filteredCharacters.length !== 0);
  characterGrid.classList.toggle("hidden", filteredCharacters.length === 0);

  // Provide a readable fallback if an external image fails.
  characterGrid.querySelectorAll(".card-image").forEach(image => {
    image.addEventListener("error", () => {
      const wrapper = image.closest(".card-image-wrap");
      if (!wrapper || image.dataset.failed === "true") return;

      image.dataset.failed = "true";
      image.remove();

      const fallback = document.createElement("div");
      fallback.className = "card-image-fallback";
      fallback.textContent = wrapper.querySelector(".favorite-button")
        ? getCharacterById(wrapper.closest(".character-card").dataset.characterId)?.emoji || "✦"
        : "✦";

      wrapper.prepend(fallback);
    }, { once: true });
  });
}

/* ===== FILTERS AND SEARCH ===== */

filterList.addEventListener("click", event => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;

  activeFilter = button.dataset.filter;

  filterList.querySelectorAll("[data-filter]").forEach(filterButton => {
    const isActive = filterButton === button;
    filterButton.classList.toggle("active", isActive);
    filterButton.setAttribute("aria-pressed", String(isActive));
  });

  renderCharacters();
});

searchInput.addEventListener("input", renderCharacters);

resetSearchButton.addEventListener("click", () => {
  searchInput.value = "";
  activeFilter = "All";

  filterList.querySelectorAll("[data-filter]").forEach(button => {
    const isActive = button.dataset.filter === "All";
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  renderCharacters();
  searchInput.focus();
});

document.addEventListener("keydown", event => {
  const target = event.target;
  const typing = target instanceof HTMLElement &&
    (target.isContentEditable ||
     ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName));

  if (event.key === "/" && !typing && !event.ctrlKey && !event.metaKey && !event.altKey) {
    event.preventDefault();
    searchInput.focus();
  }

  if (event.key === "Escape") {
    closeModal(profileModal);
    closeModal(chatModal);
  }
});

/* ===== FAVORITES ===== */

function toggleFavorite(id) {
  const character = getCharacterById(id);
  if (!character) return;

  if (favoriteCharacters.has(id)) {
    favoriteCharacters.delete(id);
    showToast(`${character.name} removed from favorites.`);
  } else {
    favoriteCharacters.add(id);
    showToast(`${character.name} added to favorites.`);
  }

  renderCharacters();
}

/* ===== PROFILE MODAL ===== */

function openProfile(id) {
  const character = getCharacterById(id);
  if (!character) return;

  profileContent.innerHTML = `
    <div class="profile-cover">
      ${getImageMarkup(character)}
    </div>

    <div class="profile-details">
      <span class="eyebrow">${escapeHTML(character.category)} · AGE ${character.age}</span>
      <h2 id="profileName">${escapeHTML(character.name)}</h2>
      <p class="profile-tagline">${escapeHTML(character.tagline)}</p>

      <p class="profile-description">${escapeHTML(character.description)}</p>

      <h3 class="profile-section-title">Personality</h3>
      <p class="profile-description">${escapeHTML(character.personality)}</p>

      <h3 class="profile-section-title">Background story</h3>
      <p class="profile-description">${escapeHTML(character.background)}</p>

      <h3 class="profile-section-title">Interests</h3>
      <div class="profile-tags">
        ${character.tags.map(tag => `<span>${escapeHTML(tag)}</span>`).join("")}
      </div>

      <div class="profile-actions">
        <button class="button button-primary" type="button" data-profile-chat="${escapeHTML(character.id)}">
          Start a conversation ↗
        </button>
        <button class="button button-secondary" type="button" data-close="profileModal">
          Close profile
        </button>
      </div>
    </div>
  `;

  const profileImage = profileContent.querySelector(".profile-cover img");

  if (profileImage) {
    profileImage.addEventListener("error", () => {
      profileImage.remove();

      const cover = profileContent.querySelector(".profile-cover");
      if (cover) {
        cover.style.display = "grid";
        cover.style.placeItems = "center";
        cover.style.fontSize = "70px";
        cover.textContent = character.emoji;
      }
    }, { once: true });
  }

  openModal(profileModal);
}

/* ===== CHAT DEMO ===== */

function openChat(id) {
  const character = getCharacterById(id);
  if (!character) return;

  activeCharacter = character;

  chatCharacterName.textContent = character.name;
  chatAvatar.innerHTML = getImageMarkup(character);

  const avatarImage = chatAvatar.querySelector("img");

  if (avatarImage) {
    avatarImage.addEventListener("error", () => {
      chatAvatar.textContent = character.emoji;
      avatarImage.remove();
    }, { once: true });
  }

  chatMessages.innerHTML = "";

  addMessage(character.greeting, "character");

  suggestionList.innerHTML = character.starters.map(starter => `
    <button type="button" data-message="${escapeHTML(starter)}">
      ${escapeHTML(starter)}
    </button>
  `).join("");

  openModal(chatModal);

  setTimeout(() => chatInput.focus(), 100);
}

function addMessage(text, sender) {
  const message = document.createElement("div");
  message.className = `message ${sender === "user" ? "user-message" : "character-message"}`;

  const messageText = document.createElement("span");
  messageText.textContent = text;

  const time = document.createElement("span");
  time.className = "message-time";
  time.textContent = getCurrentTime();

  message.append(messageText, time);
  chatMessages.appendChild(message);

  scrollChatToBottom();
}

function createDemoReply(userText, character) {
  const text = userText.toLowerCase();

  if (/\b(hello|hi|hey|good morning|good afternoon|good evening)\b/.test(text)) {
    return `Hey there! It's nice to hear from you. What would you like us to talk about?`;
  }

  if (/\b(yourself|who are you|about you|your story)\b/.test(text)) {
    return `${character.background} That's a little about me! What else would you like to know?`;
  }

  if (/\b(adventure|explore|journey|travel|quest)\b/.test(text)) {
    return `${character.name} smiles. "Now you're talking! Every great journey begins with a single step. Let's imagine where our adventure could take us."`;
  }

  if (/\b(story|tell me|once upon)\b/.test(text)) {
    return `"Alright, here's a little story," ${character.name} says. "Imagine a place where the impossible becomes possible, and every choice opens a new path. What do you think happens next?"`;
  }

  if (/\b(sad|unhappy|depressed|lonely|bad day|upset)\b/.test(text)) {
    return `"I'm sorry things feel difficult right now," ${character.name} says gently. "Sometimes it helps to talk things through. Would you like to tell me more?"`;
  }

  if (/\b(love|romantic|date|heart)\b/.test(text)) {
    return `${character.name} pauses thoughtfully. "That's an interesting subject! I think meaningful connections begin with honesty, kindness, and getting to know each other."`;
  }

  if (/\b(joke|funny|laugh)\b/.test(text)) {
    return `"Why did the storyteller bring a ladder? Because the story was about to reach new heights!" ${character.name} laughs.`;
  }

  if (/\b(thank|thanks|thank you)\b/.test(text)) {
    return `"You're welcome! I'm glad we could talk. What shall we explore next?"`;
  }

  if (/\b(bye|goodbye|see you|gotta go)\b/.test(text)) {
    return `"Until next time! Remember, there's always another story waiting to be discovered."`;
  }

  const responses = [
    `"That's an interesting thought. Tell me a little more about what you mean."`,
    `${character.name} thinks for a moment. "I hadn't considered it that way before. What made you think of that?"`,
    `"I like where this conversation is going. If we could take this idea anywhere, where would you want to go?"`,
    `"That gives me something to think about! What happened next in your story?"`,
    `"Interesting! I'd love to hear more about your perspective. What else is on your mind?"`
  ];

  // Deterministic selection avoids pretending this demo is an AI service.
  const index = (text.length + character.name.length) % responses.length;
  return responses[index];
}

chatForm.addEventListener("submit", event => {
  event.preventDefault();

  const message = chatInput.value.trim();
  if (!message || !activeCharacter) return;

  addMessage(message, "user");
  chatInput.value = "";
  chatInput.focus();

  const reply = createDemoReply(message, activeCharacter);

  window.setTimeout(() => {
    if (activeCharacter) {
      addMessage(reply, "character");
    }
  }, 450);
});

suggestionList.addEventListener("click", event => {
  const button = event.target.closest("[data-message]");
  if (!button) return;

  chatInput.value = button.dataset.message;
  chatForm.requestSubmit();
});

/* ===== MODALS ===== */

function openModal(modal) {
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal(modal) {
  if (modal.classList.contains("hidden")) return;

  modal.classList.add("hidden");

  if (profileModal.classList.contains("hidden") &&
      chatModal.classList.contains("hidden")) {
    document.body.style.overflow = "";
  }

  if (modal === chatModal) {
    activeCharacter = null;
  }
}

document.addEventListener("click", event => {
  const actionButton = event.target.closest("[data-action]");

  if (actionButton) {
    const { action, id } = actionButton.dataset;

    if (action === "favorite") toggleFavorite(id);
    if (action === "profile") openProfile(id);
    if (action === "chat") openChat(id);

    return;
  }

  const closeButton = event.target.closest("[data-close]");

  if (closeButton) {
    const modal = document.getElementById(closeButton.dataset.close);
    if (modal) closeModal(modal);
    return;
  }

  const profileChatButton = event.target.closest("[data-profile-chat]");

  if (profileChatButton) {
    const id = profileChatButton.dataset.profileChat;
    closeModal(profileModal);
    openChat(id);
    return;
  }

  if (event.target.classList.contains("modal-backdrop")) {
    closeModal(event.target);
  }
});

/* ===== MOBILE NAVIGATION ===== */

const mobileMenu = document.getElementById("mobileMenu");
const mainNav = document.getElementById("mainNav");

mobileMenu.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");

  mobileMenu.setAttribute("aria-expanded", String(isOpen));
  mobileMenu.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  mobileMenu.textContent = isOpen ? "×" : "☰";
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    mobileMenu.setAttribute("aria-expanded", "false");
    mobileMenu.setAttribute("aria-label", "Open navigation");
    mobileMenu.textContent = "☰";
  });
});

/* ===== LIGHT / DARK MODE ===== */

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const themeLabel = document.querySelector(".theme-label");

function applyTheme(theme) {
  const isLight = theme === "light";

  document.documentElement.dataset.theme = isLight ? "light" : "dark";

  themeIcon.textContent = isLight ? "☾" : "☀";
  themeLabel.textContent = isLight ? "Dark mode" : "Light mode";

  themeToggle.setAttribute(
    "aria-label",
    isLight ? "Switch to dark mode" : "Switch to light mode"
  );

  themeToggle.setAttribute("aria-pressed", String(isLight));
  themeToggle.title = isLight ? "Switch to dark mode" : "Switch to light mode";

  try {
    localStorage.setItem("characterverse-theme", isLight ? "light" : "dark");
  } catch (error) {
    // Theme switching remains available if browser storage is disabled.
  }
}

function loadSavedTheme() {
  try {
    const savedTheme = localStorage.getItem("characterverse-theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }
  } catch (error) {
    // Use dark mode when storage is unavailable.
  }

  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.dataset.theme || "dark";
  applyTheme(currentTheme === "dark" ? "light" : "dark");
});

/* ===== INITIALIZE ===== */

applyTheme(loadSavedTheme());

filterList.querySelectorAll("[data-filter]").forEach(button => {
  button.setAttribute("aria-pressed", String(button.dataset.filter === activeFilter));
});

renderCharacters();
