# Tranglo QA Technical Test - Playwright Automation

This repository contains the Technical Test for the QA Automation role. It includes a Web UI automation suite for Swag Labs and a full CRUD API lifecycle test for JSONPlaceholder.

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org) (v16 or higher)
- [Git](https://git-scm.com)

### Installation
1. Clone this repository:
   ```bash
   git clone <YOUR_REPOSITORY_LINK_HERE>


2. Navigate to the project folder:
 ```bash
cd Tranglo_QA_Assesment
```

3. Install dependencies:
 ```bash
npm install
```


4. Install Playwright browsers:
```bash
npx playwright install
```

### 🛠️ Executing Tests
You can execute the tests directly from the command line: 
Run all tests (Headless):
```bash
npx playwright test
```

Run UI tests with headed browser (Visible):
```bash
npx playwright test tests/ui_tests.spec.ts --headed
```

Run API tests only:
```bash
npx playwright test tests/api_tests.spec.ts
```


### 📊 Generating Reports
A test report is automatically generated after execution. To view it: 
```bash
npx playwright show-report
```

🏗️ Project Structure
pages/: Page Object Model (POM) classes (Login, Products, Cart, Checkout).
tests/: End-to-end UI and API test scripts.
playwright.config.ts: Configuration for browsers, reporters, and base settings. 

---

### **2. Final Push to GitHub**
Run these commands in your VS Code terminal to ensure your code is live:

1.  **Add all files**: `git add .`
2.  **Commit**: `git commit -m "Final submission: UI POM and API CRUD tests"`
3.  **Push**: `git push origin main`

---

### **3. Submission Checklist**
Before sending your link to the recruiter, click on your GitHub URL and verify you see:
*   [ ] A **`pages/`** folder with your 4 Page Objects.
*   [ ] A **`tests/`** folder with your 3 spec files.
*   [ ] The **`README.md`** rendered correctly on the home page.
*   [ ] **`playwright.config.ts`** and **`package.json`** in the root.

**Do you have your GitHub URL now?** (It should look like `https://github.com`)
