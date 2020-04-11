# <a name="commit"></a> Commit Message Guidelines
> **THIS PAGE IS A WORK IN PROGRESS AND IS NOT CURRENTLY UP TO DATE**


We would like to have very precise rules over how our git commit messages should be formatted. This will lead to more readable messages that are easy to follow when looking through the **project history**. But also, we would like to use the git commit messages to generate the **_Pop N' Lock Theme by Luxcium ✨_ Change Log**.

## <a name="format"></a> Commit Message Format
Each commit message consists of a **header**, a **body** and a **footer**.  The header has a special
format that includes a **type**, a **scope** and a **subject**. The commit message should be structured as follows:

```
<type>[(<optional scope>)]: <description>
[<BLANK LINE> <optional body>]
[<BLANK LINE> <optional footer>]
```


The commit contains the following structural elements, to communicate intent to the consumers of your library:

1. **fix:** a commit of the type `fix` patches a bug in your codebase (this correlates with [`PATCH`](http://semver.org/#summary) in semantic versioning).
2. **feat:** a commit of the type `feat` introduces a new feature to the codebase (this correlates with [`MINOR`](http://semver.org/#summary) in semantic versioning).
3. **BREAKING CHANGE:** a commit that has the text `BREAKING CHANGE:` at the beginning of its optional body or footer section introduces a breaking API change (correlating with [`MAJOR`](http://semver.org/#summary) in semantic versioning). A BREAKING CHANGE can be part of commits of any type.
4. Others: commit types other than `fix:` and `feat:` are allowed, for example [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) (based on the [Angular convention](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)) recommends `chore:`, `docs:`, `style:`,` refactor:`, `perf:`, `test:`, and others.


We also recommend `improvement` for commits that improve a current implementation without adding a new feature or fixing a bug. Notice these types are not mandated by the conventional commits specification, and have no implicit effect in semantic versioning (unless they include a BREAKING CHANGE).
A scope may be provided to a commit’s type, to provide additional contextual information and is contained within parenthesis, e.g., `feat(parser): add ability to parse arrays`.

The **header** is mandatory and the **scope** of the header is optional.

The header should not be longer than 50 characters. Any other line of the commit message cannot be longer than 72 characters! This allows the message to be easier
to read on GitHub as well as in various git tools.

The footer should contain a [closing reference to an issue](https://help.github.com/articles/closing-issues-via-commit-messages/) if any.


Samples: (even more [samples](https://github.com/angular/angular/commits/master))

```
docs(changelog): update changelog to beta.5
```
```
fix(release): need to depend on latest rxjs and zone.js

The version in our package.json gets copied to the one we publish, and users need the latest of these.
```
## Examples [⇝](https://www.conventionalcommits.org/en/v1.0.0-beta.4/#examples)

### Commit message with description and breaking change in body [↗](https://www.conventionalcommits.org/en/v1.0.0-beta.4/#commit-message-with-description-and-breaking-change-in-body)
```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

### Commit message with optional ! to draw attention to breaking change [↗](https://www.conventionalcommits.org/en/v1.0.0-beta.4/#commit-message-with-optional-to-draw-attention-to-breaking-change)
```
chore!: drop Node 6 from testing matrix

BREAKING CHANGE: dropping Node 6 which hits end of life in April
```
### Commit message with no body [↗](https://www.conventionalcommits.org/en/v1.0.0-beta.4/#commit-message-with-no-body)
```
docs: correct spelling of CHANGELOG
```
### Commit message with scope [↗](https://www.conventionalcommits.org/en/v1.0.0-beta.4/#commit-message-with-scope)
```
feat(lang): add polish language
```
### Commit message for a fix using an (optional) issue number. [↗](https://www.conventionalcommits.org/en/v1.0.0-beta.4/#commit-message-for-a-fix-using-an-optional-issue-number)

```
fix: correct minor typos in code

see the issue for details on the typos fixed

closes issue #12
```


### Revert
If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

### Type
Must be one of the following:

* **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
* **ci**: Changes to our CI configuration files and scripts (example scopes: Circle, BrowserStack, SauceLabs)
* **docs**: Documentation only changes
* **feat**: A new feature
* **fix**: A bug fix
* **perf**: A code change that improves performance
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* **test**: Adding missing tests or correcting existing tests

### Scope
The scope should be the name of the npm package affected (as perceived by the person reading the changelog generated from commit messages).

The following is the list of supported scopes:

* **common**
* **elements**
* **forms**
* **changelog**
* **language-service**
* **localize**
* **upgrade**

There are currently a few exceptions to the "use package name" rule:

* **changelog**: used for updating the release notes in CHANGELOG.md

* none/empty string: useful for `style`, `test` and `refactor` changes that are done across all
  packages (e.g. `style: add missing semicolons`) and for docs changes that are not related to a
  specific package (e.g. `docs: fix typo in tutorial`).

### Subject
The subject contains a succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize the first letter
* no dot (.) at the end

### Body
Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

### Footer
The footer should contain any information about **Breaking Changes** and is also the place to
reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.

### Referencing issues

Closed bugs should be listed on a separate line in the footer prefixed with "Closes" keyword like this:

`Closes #234`

or in case of multiple issues:

`Closes #123, #245, #992`




> We used **Contributing to Angular: [Commit Message Guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-guidelines)** as a source of inspiration ([Copyright (c) 2010-2020 Google LLC.](http://angular.io/license))

> We also used **Conventional Commits [specification](www.conventionalcommits.org/)** as a source of technical infomration ([Copyright (c) 2018 Conventional Changelog](https://github.com/conventional-commits/conventionalcommits.org/blob/f9514d729204ca6169d41679f35bb0b5575c26c5/LICENSE)) [[CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)]

Documentation used to create theses guidelines can be found in this AngularJS Git Commit Message Conventions [document][commit-message-format].
And on [conventionalcommits.org](https://www.conventionalcommits.org/)

[commit-message-format]: https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#

The Conventional Commits specification is a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of. This convention dovetails with [SemVer](http://semver.org/), by describing the features, fixes, and breaking changes made in commit messages.
