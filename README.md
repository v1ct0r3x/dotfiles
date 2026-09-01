| Function                         | Tool                             |
| -------------------------------- | -------------------------------- |
| OS                               | Arch Linux                       |
| Window Manager                   | Hyprland                         |
| Bar                              | Ashell                           |
| Terminal                         | Kitty + Starship                 |
| Shell                            | zsh + Bash                       |
| Launcher                         | Wofi or Rofi-wayland             |
| Wallpaper                        | Awww                             |
| Clipboard                        | wl-clipboard                     |
| Screenshot                       | Grim + Slurp                     |
| Colorscheme                      | Pywal (generates from wallpaper) |
| Idle Manager                     | Hypridle                         |
| Image viewer                     | imv + gwenview                   |
| Screen record                    | OBS + wf-recorder                |
| Editor                           | Neovim + Vim + VSCodium          |
| Browser                          | Brave + Firefox                  |
| Notification                     | Swaync + Libnotify               |
| File Manager                     | Yazi (terminal) + Thunar (GUI)   |
| Media Plyer                      | MPV                              |
| Image Editor                     | GIMP + Inkscape                  |
| Video Editor                     | Kdenlive                         |
| CAD                              | FreeCAD                          |
| Circuit Sim                      | KiCad + ngspice                  |
| Microcontroller                  | MPLAB X + PlatformIO             |
| Python package & Project manager | uv                               |
| Calendar emulator                | calcurse                         |

### zsh

#### Dependencies:

```sh
yay -S zsh neovim eza bat fd fzf zoxide starship ripgrep
```

Add the following to /etc/zsh/zshenv with sudo privilages to point where zsh should look for its dotfiles:

```sh
if [[ -z "$XDG_CONFIG_HOME" ]]
then
    export XDG_CONFIG_HOME="$HOME/.config"
fi

if [[ -d "$XDG_CONFIG_HOME/zsh" ]]
then
    export ZDOTDIR="$XDG_CONFIG_HOME/zsh"
fi
```

Create the following directories for history and completion cache:

```sh
mkdir -p ~/.local/state/zsh   # history
mkdir -p ~/.cache/zsh         # completion cache
```

#### Keybindings

| Key       | Action                                              |
| --------- | --------------------------------------------------- |
| `Ctrl+R`  | Fuzzy history search (fzf)                          |
| `Ctrl+T`  | Fuzzy file search including hidden files (fzf + fd) |
| `Ctrl+F`  | Fuzzy file search excluding hidden files (fzf + fd) |
| `Ctrl+→`  | Move forward one word                               |
| `Ctrl+←`  | Move backward one word                              |
| `↑` / `↓` | History search by prefix                            |
| `Ctrl+\`  | Toggle autosuggestions                              |

---

### Starship

Installation:

```sh
sudo pacman -S starship
```

Setup your shell to use starship:

```sh
# Add the following to the end of ~/.zshrc:
eval "$(starship init zsh)"
```

Dependencies:

```sh
sudo pacman -S ttf-firacode-nerd && fc-cache -fv
```

Configuration:

```sh
starship preset nerd-font-symbols -o ~/.config/starship.toml
```

### Neovim

```sh
sudo pacman -S --noconfirm --needed gcc make git ripgrep fd tree-sitter-cli unzip neovim
sudo pacman -S neovim git lazygit tree-sitter-cli curl fzf ripgrep fd
```
