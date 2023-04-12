# Contributing <!-- omit in toc -->

## Table Of Contents <!-- omit in toc -->

- [Branching Model](#branching-model)
- [Commit Rules](#commit-rules)
- [Releasing](#releasing)


## Branching Model

We use the following branching model:

- `main`: This is the main branch and should always contain the latest stable version of the package. Commits directly to this branch are not allowed.
- `develop`: This is the branch where all development happens. You may make changes directly on this branch or use feature branches if you prefer.

## Commit Rules

> **Note:** To enforce these commit rules, this repository is configured with [commitlint](https://commitlint.js.org/) and [husky](https://typicode.github.io/husky).
> 
We follow the Conventional Commits specification for commit messages. This means that all commits should be structured as follows:

```
<type>[scope]: <description>

[optional body]

[optional footer(s)]
````

Where `type` is one of the following:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Changes that do not affect the meaning of the code (e.g. formatting)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `test`: Adding missing or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools

The `scope` is required when a commit affects a package otherwise it is optional. Where it is required, it should be one of the following:

- `editorconfig`: Changes to the `.editorconfig` file.
- `phpcs`: `Changes to PHP coding standards checks`.

Please use the appropriate scope when making changes to the relevant packages, to help ensure that commits are clearly labeled and organized for easier tracking and maintenance.

The `description` should be a short summary of the changes made in the commit.

The `body` should provide more detailed information about the changes, such as the reasoning behind them or any relevant information for reviewers.

The `footer(s)` can be used to reference any associated issue or pull request numbers. 

## Releasing

As this repository doesn't use version numbers, creating a new release simply involves merging the changes from the `develop` branch into the `main` branch. To do this, please follow these steps:

1. Ensure that all changes you want to include in the release have been merged into the `develop` branch.
2. Create a pull request from the `develop` branch to the `main` branch.
3. Include a description of the changes that have been made since the last release in the pull request.
4. Once the pull request has been approved and merged, the changes will be incorporated into the stable version of the package on the `main` branch.