# Contributing to SubFlow Panel React

Thank you for your interest in contributing to SubFlow Panel React!

## Table of contents

- [Issues](#issues)
- [Local development](#local-development)
- [Pull requests](#pull-requests)

## Issues

Please remember to [search existing issues and pull requests] before opening a
new issue for bug reports, documentation requests or feature suggestions.

[search existing issues and pull requests]: https://docs.github.com/en/search-github/searching-on-github/searching-issues-and-pull-requests

## Local development

Make sure that you have [pnpm](https://github.com/pnpm/pnpm) installed on your
machine.

Install required packages after [cloning the repository]:

```bash
pnpm install
```

Start local development server:

```bash
pnpm dev
```

Create a new work branch and start your changes!

[cloning the repository]: https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository

## Commits

We use [Conventional Commits].

You can make git commits as usual, or use the following command to write the
commit message in a somewhat interactive way:

```bash
pnpm commit
```

Before typing the commit message, the `pre-commit` [hook] will be triggered,
which will lint and format the staged files. If you want to run the linter and
the formatter manually, use `pnpm lint` and `pnpm format` respectively.

After finising commit message, the `commit-msg` hook will be triggered to lint
the commit message.

[Conventional Commits]: https://www.conventionalcommits.org/en/v1.0.0/
[hook]: https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks

## Pull requests

Once your local changes are ready, you can create a pull request.

Please summarize your changes in the title and also reference in the body the
issue(s) that you worked on. It's recommended to follow the Conventional Commits
specification when raising a pull request.

After you create a pull request, ask an Admin (i.e., a member of
[@PMR-Fansub/admins]) to review your proposed changes.

Feel free to create [draft pull requests] when your changes aren't ready yet and
ask for our helps.

[@PMR-Fansub/admins]: https://github.com/orgs/PMR-Fansub/teams/admins
[draft pull requests]: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests#draft-pull-requests
