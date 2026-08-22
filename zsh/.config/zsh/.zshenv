# ~/.config/zsh/.zshenv

# ---------- XDG base directories ----------
# Centralizes config/cache/data locations
export XDG_CONFIG_HOME="$HOME/.config"
export XDG_CACHE_HOME="$HOME/.cache"
export XDG_DATA_HOME="$HOME/.local/share"
export XDG_STATE_HOME="$HOME/.local/state"

# ---------- Editor ----------
# Default editor used by git, crontab, etc.
export EDITOR="nvim"
export VISUAL="nvim"

# ---------- Pager ----------
export MANPAGER="bat -l man -p"


# ---------- GPG ----------
export GPG_TTY=$(tty)


# ---------- PATH ----------
# Personal binaries/scripts
export PATH="$HOME/.local/bin:$PATH"

# proto
# export PROTO_HOME="$XDG_DATA_HOME/proto";
# export PATH="$PROTO_HOME/shims:$PROTO_HOME/bin:$PATH";
# . "$HOME/.cargo/env"
