# Contributing to SovereignQuest

Thank you for your interest in contributing to *SovereignQuest*! We welcome all skill levels and appreciate every contribution that helps improve our project. Please follow these guidelines to make the contribution process clear and effective for everyone.

---

## Table of Contents
- [Getting Started](#getting-started)
- [Branching and Workflow](#branching-and-workflow)
- [Development Guidelines](#development-guidelines)
- [Pull Requests](#pull-requests)
- [Issues and Project Management](#issues-and-project-management)
- [Contact](#contact)

---

### Getting Started

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/SovereignQuest.git
   ```

2. **Set Up Your Environment**:
   - Follow the instructions in the `README.md` file to install dependencies and configure your development environment.

3. **Identify Your First Task**:
   - All tasks are rated by their complexity, on a 1-5 scale. When selecting an issue to engage, check the labeled complexity and knowledge requirements first to ensure success.
   - For new contributors, check for issues labeled `good first issue` or `help wanted - 5`. These are beginner-friendly and good starting points.
   - If you have been assigned a particular task by a team lead, look for the issue tagged with the reference ID provided in your assignment message.

---

### Branching and Workflow

1. **Main Branches**:
   - `main`: The stable branch; all releases are merged here.
   - `develop`: Active development branch; base branch for feature branches.

2. **Creating Feature Branches**:
   - Name branches descriptively based on the task, using the following format:
     - **Features**: `feature/<short-description>`
     - **Bug Fixes**: `bugfix/<short-description>`
     - **Documentation**: `docs/<short-description>`

   - If the branch you need to open a pull request is not on the list above, please contact a team lead before adding it. Unauthorized branches will be removed.

3. **Branch Creation (Example)**:
   ```bash
   git checkout -b feature/add-authentication
   ```

4. **Keeping Your Branch Up to Date**:
   - Regularly pull updates from `develop` to keep your branch in sync:
     ```bash
     git pull origin develop
     ```

---

### Development Guidelines

1. **Coding Standards**:
   - **HTML/CSS**: Follow semantic HTML structure and use consistent naming conventions. For detailed formatting requirements, please refer to [HTML/CSS Formatting](formatting_requirements/HTML_CSS_FORMATTING.md).
   - **JavaScript**: Adhere to ES6+ standards. Use descriptive variable names and functional programming where possible. For detailed formatting requirements, please refer to [JS Formatting](formatting_requirements/JS_FORMATTING.md).
   - **Backend**: Maintain code modularity and ensure secure data handling.

2. **Linters and Formatters**:
   - Code must pass all linter checks. Ensure your setup runs our `.prettierrc` and `.eslintrc` configurations before committing.

3. **Commenting Code**:
   - Use comments to explain complex logic and highlight any workarounds. Keep comments clear and concise. For detailed commenting requirements, please refer to [COMMENTING REQUIREMENTS](formatting_requirements/COMMENTING_REQUIREMENTS.md).

4. **Writing Tests**:
   - If adding a new feature or fixing a bug, include tests in the `tests/` folder. Pull requests made to interactive modules will be rejected without working test file accompaniment. Refer to existing tests as examples.

---

### Pull Requests

1. **Creating a Pull Request**:
   - Open a pull request (PR) to `develop` for review. Use the following template for PRs:
     - **Title**: `[Feature] Add Authentication`
     - **Description**: Briefly explain the feature/fix, relevant issues, and any additional context.

2. **PR Checklist**:
   - [ ] Ensure the code passes all tests, and test files are included in PR.
   - [ ] Verify that code is formatted correctly.
   - [ ] Document any new functionality in the `README.md` if applicable.

3. **Requesting a Review**:
   - Tag at least one reviewer and address their feedback before the PR can be merged.

4. **Merging**:
   - Only team leads or reviewers can merge approved PRs.

---

### Issues and Project Management

1. **Reporting Issues**:
   - Create an issue with a clear title and description. Use labels like `bug`, `feature`, or `documentation`.

2. **Working on Issues**:
   - Comment on the issue to claim it. The issue will then be assigned to you. Claimed issues will be yours for one week following assignment. If more time is needed, please contact a team lead to extend your claim. Claimed issues that exceed the time limit will be reopened and can be claimed by another member of the team.

3. **Project Board**:
   - Check the project board for an overview of open, in-progress, and completed tasks. Move issues as you progress through them.

---

### Contact

If you have questions or need guidance, feel free to reach out to a team lead. We’re here to help make your contribution experience as smooth as possible!

---

Thank you for contributing to *SovereignQuest*!