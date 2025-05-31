# 📸 Virtual Webcam Application

[![Official Link](https://img.shields.io/badge/Official%20Link-dprits55541.github.io-blue?style=for-the-badge&logo=github)](https://dprits55541.github.io/)

(Forking is okay as long as you give credit!)

## 🌟 Overview

The **Virtual Webcam Application** is a powerful and modern web application that leverages the MediaDevices API to interact with your device's camera. It offers a comprehensive set of features for capturing, recording, and managing your media directly in the browser.

Key highlights include:

* **Live webcam streaming** with dynamic camera switching.

* **Photo capture** and **video recording** with **pause/resume** functionality.

* **Persistent local storage** via IndexedDB, ensuring your media is safe even after closing the browser.

* A dedicated "My Media" gallery for **viewing, downloading, and managing** your captured content.

* An **aesthetic, responsive UI** with flexible **theming options** (Light/Dark Mode, accent colors) and an **in-app changelog** for transparency.

This project serves as a robust example of client-side webcam interaction, media persistence, and advanced UI customization using a modern web stack.

---

## ✨ Features

### 📷 Webcam & Media Control

* ✅ **One-Click Operation:** Effortless start and stop of your webcam stream.

* 🔄 **Dynamic Camera Switching:** Seamlessly switch between available front/rear cameras on mobile, or different connected webcams on desktop.

* 📸 **Photo Capture:** Snap high-quality still images from the live video feed.

* 🎬 **Video Recording with Pause/Resume:** Record video segments with the unique ability to pause and resume, giving you more control over your recordings.

### 💾 Persistent Storage & Management

* 🔒 **Local Persistence:** All captured photos and videos are automatically saved to your browser's **IndexedDB**, ensuring they are available across browser sessions.

* 🖼️ **"My Media" Gallery:** A dedicated section to easily browse, preview, and manage all your captured content.

* ⬇️ **Download Media:** Directly download individual captured photos and videos to your device.

* 🗑️ **Delete Functionality:** Delete specific media items or use the "Clear All Media" button to empty your entire gallery (with confirmation).

### 🎨 User Experience & Customization

* 📱 **Responsive Design:** The application is optimized for seamless viewing and interaction across all devices, from smartphones to large monitors.

* 🌈 **Aesthetic Theming:**

    * Choose from **Indigo (default), Emerald (green), and Rose (pink) accent themes.**

    * Effortlessly toggle between **Light Mode and Dark Mode** for comfortable viewing in any environment.

* 💡 **Interactive UI:** Modern buttons with smooth hover effects, clear state indicators, and dynamic feedback messages for a fluid user experience.

* 🔍 **Preview Modals:** Instant pop-up previews for recently captured media.

* 💬 **Custom Confirmation Dialogs:** Enhanced user prompts with clear titles and messages for critical actions.

* 📊 **In-App Changelog:** A dedicated section accessible from settings to review application updates and feature history.

---

## 🛠️ Technologies Used

* **HTML5:** The foundational structure of the web application.

* **CSS3:** Custom styling and layout, built with a focus on modern aesthetics.

* **Tailwind CSS:** A utility-first CSS framework for rapid UI development, consistent styling, and responsive design.

* **JavaScript (ES6+):** The core logic driving all interactive functionality:

    * [`navigator.mediaDevices.getUserMedia`](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia): For accessing and controlling the webcam.

    * [`MediaRecorder API`](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder): For efficient video recording.

    * [`Canvas API`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext): For capturing high-quality still images from the video stream.

    * [`IndexedDB API`](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API): For robust and persistent local storage of captured media.

    * [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) & [`URL.createObjectURL`](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL): For handling and displaying captured media data efficiently.

    * [`FileReader API`](https://developer.mozilla.org/en-US/docs/Web/API/FileReader): For converting media blobs to Base64 for IndexedDB storage.

* **Font Awesome:** A popular icon library for various user interface icons.

---

## 🔮 Future Plans

* Record Computer Screen + more

---

## 🚀 Getting Started

To get a local copy of this project up and running, follow these simple steps.

### Prerequisites

You only need a modern web browser (such as Chrome, Firefox, Edge, or Safari) that supports the MediaDevices API. No backend server or complex environment setup is required as the application runs entirely client-side.

### Installation

1.  **Clone the repository** (or simply download the `index.html` file):

    ```bash
    git clone [https://github.com/dprits55541/webcam-app.git](https://github.com/dprits55541/webcam-app.git)
    cd webcam-app
    ```

2.  **Open `index.html`:**
    Navigate to the cloned directory and open the `index.html` file in your preferred web browser.

    ```bash
    # On macOS
    open index.html

    # On Windows
    start index.html

    # Or manually browse to the file location in your browser
    ```

And that's it! Your Virtual Webcam Application should now be live in your browser.

---

## ⚙️ How to Use

1.  **Start Webcam:** Click the "**Start Webcam**" button to begin your camera stream. Your browser will likely prompt you to grant camera access—please allow it.

2.  **Switch Cameras:** If multiple camera devices are available on your system, use the dropdown menu and the "**Change Camera**" button to select a different one.

3.  **Capture Photo:** Click "**Capture Photo**" to take a still image from the live feed. A quick preview will appear, and the photo will be saved to your "My Media" gallery.

4.  **Record Video:**

    * Click "**Record Video**" to start recording.

    * Click "**Pause**" to temporarily stop recording. The button text will change to "Resume."

    * Click "**Resume**" to continue recording.

    * Click "**Stop Recording**" to finalize the video. A preview will pop up, and the video will be saved to "My Media."

5.  **My Media Gallery:** Click the "**My Media**" navigation button to access your gallery of captured images and videos.

    * Click on any media item's preview to view it in a larger modal.

    * Click the "**Download**" button below a media item to save it to your device.

    * To remove a specific item, click the **trashcan icon** (🗑️) on its card. A confirmation dialog will appear.

    * To clear your entire gallery, click the "**Clear All Media**" button at the bottom of the "My Media" section (this also requires confirmation).

6.  **Theme Settings:** Click the **gear icon (⚙️)** in the top navigation bar to open the theme settings modal.

    * **Accent Theme:** Select your preferred primary color scheme (Indigo, Emerald, or Rose).

    * **Color Mode:** Choose between **Light Mode** and **Dark Mode**.

    * **Show Changelog:** Click this button to view the application's version history and feature updates.

---

## 🌐 Deployment (GitHub Pages)

This project is perfectly suited for quick and easy deployment using GitHub Pages, allowing you to host it directly from your GitHub repository.

1.  **Create a GitHub Repository:**

    * Go to [github.com/new](https://github.com/new).

    * Name your repository (e.g., `webcam-experiment-app`).

    * Ensure it's `Public`.

    * Do **not** add a README or `.gitignore` yet.

    * Click "**Create repository**."

2.  **Upload `index.html`:**

    * On your new repository page, click the "**uploading an existing file**" link.

    * Drag and drop your `index.html` file (which contains all the application code) into the upload area.

    * Add a concise commit message (e.g., "Initial commit: Add webcam app").

    * Click "**Commit changes**."

3.  **Enable GitHub Pages:**

    * Navigate to the `Settings` tab of your repository.

    * In the left sidebar, click on `Pages`.

    * Under the "Build and deployment" section, select `Deploy from a branch` as the source.

    * For the "Branch," choose `main` (or `master`) and ensure the folder is set to `/(root)`.

    * Click "**Save**."

4.  **Access Your Site:**

    * After a few moments (GitHub Pages needs a minute or two to build and deploy the site), refresh the `Pages` section in your repository settings.

    * You will find a link similar to `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/` where your live application is now hosted!

---

## 📄 Changelog


### View Changelog in the settings page of the official webpage


Changelog removed from README.MD due to inconsistent updates view

---

## 🤝 Contributing

Contributions are always welcome! If you have suggestions for improvements, new features, or discover any bugs, please feel free to contribute:

1.  **Fork** the repository.
2.  **Create a new branch** for your feature or bug fix:
    ```bash
    git checkout -b feature/your-awesome-feature
    # or
    git checkout -b fix/issue-description
    ```
3.  **Make your changes**.
4.  **Commit your changes** with a clear and descriptive message:
    ```bash
    git commit -m 'feat: Add amazing new feature'
    # or
    git commit -m 'fix: Resolve issue with webcam stream'
    ```
5.  **Push to your branch**:
    ```bash
    git push origin feature/your-awesome-feature
    ```
6.  **Open a Pull Request** to the `main` branch of this repository.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---
btw i had all my info but @vers4rial from discord helped me out so thanks g highly appreciate it


now yall cant dox me
