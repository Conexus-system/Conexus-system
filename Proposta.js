/* eslint-disable */
import { useState } from "react";

// ── CORES CONEXUS ────────────────────────────────────────────────────────────
const GOLD = "#bd914c";
const DARK = "#1a1a1a";
const DARKER = "#111";
const CARD = "#1e1e1e";
const BORDER = "#2a2a2a";
const TEXT = "#f0ece4";
const MUTED = "#9a9488";
const DIM = "#5e5a55";
const GREEN = "#4caf7d";
const RED = "#e05c5c";
const BLUE = "#5c9de0";

// ── LOGO CONEXUS PARTNERS — imagem real embutida em base64 ───────────────────
const LOGO_B64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAIAAABEtEjdAAAABmJLR0QA/wD/AP+gvaeTAAAgAElEQVR4nOzdd3xT1f8/8Ju90733oHRAaVlltLRMURyAMj5SUZYgiiAqMlwfFcQtfkQFy5QNggMHAkX2HqVQ2gLFDuikK2120t8f9/e533ySmzRNb9oAr+cffTT33tx7kty8c+6573MOQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADcS1idXQBwrvO7FnZ2Ee5tvZ5a3v6dnN32ikGnNujUOnWTQa8hWozt32d7sNgcgsVic3gZL+zs3JKA83A7uwDgRMeyJqsaKkRu/p1dkAfL6c1ztMo6o16n1zaTS5pryySewQadusVo6PTIThBEi9HA4Ys6uxTgXAju9zMWm9ti1NffvtLZBbn3cAUSocyXK5DYuf2pTS9qlfVGg86gVaoaykVuAU01t6i1Bp2qsfK6c0rqIBbBaiFaOrsU4EQI7vczNodHcHidXYp7j2dIUnNdqVpRlT5pu+0tD654lPyHvEJqvltMEIRBpzaN7C6LhVbZ+xqC+/2MzeGxuQjubcMVSFUNFRKPkOSxH9jYjArrJKNeQ0Z2ABeB4H4/Y3N5zbVlnV2KewaXLzboNXpNU/qsbda2ObP1FU3zXaNeq9c0dWTZANqK3dkFACfqM/ELg07V2aW4NwhlPgRBcLiCoXP3Wtvm4IpHVQ3lAokXIju4PtTcAQieSK7XKrkCycCp62g3oBph9JomRZVr3RoFoIXgfp9jc/hGg7azS+HSOFyBQafh8AS0kf3Cj4tVjZV6TZNe09zxZQNwGJpl7nMsNkcg8ezsUrg0o0HHIohBz2+xXHX0+0xl/R2R3A+RHe45CO73OS5fpFU1dnYpXFpLizHjxR8tlx9c8ahe09xi1NeVXe74UgG0E4L7fS51+kZX6BLpmshemrR3UMlGdqNBp1XWd3SxAJiA4P4AYLE5PGFnF8LlyP27cvliG5Ed4J6G4H7/Y3O4Bj3uqf4PvshNragWSL0tVyGyw/0Bwf3+lzF7F1pmzOi1SsJo6DPhM7Plh1aOJVj4UsD9AOcxPHhYLKNBl/b8ZrPFR79/hiBYbA7yg+F+gOD+QLDR6/JBw+EKWCy25RtyZus8giC4fLERTVhwX0Bwf5CgwYEgWgiCzaapm2uaawVSL62yruOLBOAM+LY/KIbO3ctisx/wKRqEMh82m2OZ1X5wxaMGrUpRdaNTSgXgDAjuDxA2h/eAtznoNc2W82+c3f4qVyjDCGtwn0Fwf4BkvLCzxWhgPajTd5DjPloOIKNpqhG7B3ZGiQCcCMH9wTJ07l42h0eb333fo622H82abNTrGisKOqVIAM6D4P7A4fLFeq2Sy7d3dtD7g1DmTdBV2w1aFQu5j3A/wmn9wEmdtv7wtxOMBu0DNRqwVtnAF7uZLTyxYYZW2aBtru2AAnC4AqlPBIsuUadTKOvvGHXqzi4FOBFq7g+i9Be2EwTLaNR3dkE6jtGgGzh1vdlCnVphGfEZJPEMYXMFBEGwWGwOT6jXKFtcpquw2D0w/YUdnV0KcCJMf/7gOrjiUYLFZnO4D0gKjVnHpTNbX1ErqnSqBicdjsMXsTk8vsit3zPfOukQADYguD/QDq0cSxAsDk/ovBjnClhszpA5P5stPJo1WSDxYnzOPKl3hLqxSq9tRq9g6FxolnmgDX5xN4cnNOjULDans8viLFy+hEXXNdeo1zIe2Tk8oVZZJ5T7IrJDp0PNHQiCIA6ueJTF5nC4Qr32fptPjsVic3ii9Be2my48unqSTtPUYjQwfjiEdXARqLkDQRDE0Ll7OVyh0aClreTe01pajGaRnSAIg07NE0gZPxYiO7gOV0nMgk5HRsD7b6oKDo9mOJ2WFqOW6dsMiOzgUu63ahq009C5e6kgxWJxuE6o3nYksUeQ5fjsR1dPYjAlkUxdR2QHV4PgDjTIEM/hi4x6LYvNZbE5PJET88GdR62o5onkZgsZbJPhi93ZHC4iO7ggNMuAVemztpH/HFk9yaBTszi8FoOOIAgOXyz1CtWpGnVqhU6t6NQytsKo1/afvMpsIYNtMgadBpOPg2tCcIfWDfrfGenO7XjNoNOQ/7PY3JZ7raer0aBjZD9CmY9e05w2YxMjewNgFlIh4cFyZNW/9FolI0mQbA6PL3a3HIwMwBWgzR0eLAa9hssXM7Iro0GHyA4uC8EdHiwtRqOL3ycAYATa3MERJ9bP0KkVLUa9wbWHjbXMY2HwDgGSZMCVoeYOjmCxuTyhzMUju1Mx1bYD4CQI7uAINofr+imAbC7fbMmZrXMZKbbUO9xy5wAuBcEdHMFiu3pwF0i9+RYdr3SqRrFHUPt3rmqo4Ivd278fAOdBmzs4gs3hNt0t7uxS2CJ2D7C8cWrQaXSqsvbv3KBTp0z6uv37AXAe1NzBEb3Hf2LQKju7FLYoqot4QpnZQr2myaDXdEp5ADoYgjvcn/Sa5p5Pfmi2kKnxwlgcHiP7AXAeNMsAtA1P5HYfT1wF9w3U3MFBlqMtPiBEbv60Y8QDuBQEd3AQhyt0D+rW2aXoBM21JTzhvT3MPTwIENzBQUK5b1P1rc4uRScwaFV9JnzW2aUAaAWCOzio11PLWwjG5jMCAGYhuIPj2ByexDOks0sBADQQ3MFxfJGbWlHT2aUAABoI7uC4fs98azToXHwcAoAHE4I7tAubwzW65jR7LJzb8EDDFwDaJWP2LhbB4goknV2Q/8HmYMhGeNAhuEN7sbn8lpaWzi7F/zAatJ1dBIBOhuAO7ZU+azubw3W5tBmGhpEBuEchuAMD+CI3dRPSZgBcCII7MKDfM98atKrOLgUA/B8Ed2AGOVs0RtQCcBEI7sCYoXP3cvkiuV+Xzi4IACC4A6MEUi+tsl7szsA8pQDQHgjuwKQ+E79gc/h6nYqReagBwGEI7sCw/s+u4vJFBp1a4hXW2WVxCg5PeHrzS51dCoBWILgD8/pPXsUVSLXKejZX0NllYZ7IzV+rrO/sUgC0AsEdnKJf5spBz2826jUsFvs+G1msqeYfox49YMHVIbiDEw2du5fN5XP4Io/g7p1dFoIgCKYmttZrlYzsB8B5ENzBuTJm75J4BKsaK3kieUfOqc3li8/vfMN8oUDqamOcATgJgjs4Xc8nPxw4ZS1BEAadhssXd8woNFLvCJ260WwhhycUufl3wNEBOh2CO3SQQc9vGfzijwKpl1bVwOE7vSOrsv62ZeMJTyhV1t1mYO8s1t8rn2RgPwBOw+rsAsAD6uCKR8l/WBwuX+SmabrL+CE4PGHG7F3WjtuuPXMFRqN+yJyf278rACfhdnYB4AFFjkVDEMSxNc/qtUo2l894CopBp2Z2h/+3Z72GhZmewLWh5g4Pluz/PNFiNDCwIxabwxNkvLCTgV0BOAFqH/BgYbHYXD4DCTMcnsBo0LV/PwBOguAODxY2h2/QMTD0vEGrYrO5Jzc83/5dATgDgjs8WNJf2N7C0Ax8AomnTq1gZFcAjEObO7giRnJaSNSdWwpjze4EwRVIODxR6rT1jOwNgEGoucODh8ViKtGewxNhKAJwTQjucF9jsQ6tHGu2jM3hGXQaRnavaaoxGnQMXmcAMAXBHe5nbA7PsgUm44WdBEPN7gRBtBh0BKPtSACMQHCH+5lRr21paemYYyG+g0tBcIf7HIfLP7N1bgcciCuQHF837cLuJR1wLIBWIbiDK+LyxUztSuwRpGmuNVs4dO5epsZ2p+g1zSI3f2Vd2eHvJjK7ZwAHILiDK2Jz+FKvcEZ2pai6STtqDYvFZvAnhFRXmmPQaQgW69ia587teJ3ZnQO0CYI7uCK+2F3VUMHU3gxa1eHvJpgtZHN4zhhZTK9p0qsVQplP093iw99NOJr1TMc0CgGYQScmcFEM3p/kCiRGvXbwS3ucdwhrZL5Ryrrbzhuf0jFcgZTDFQikXn0mft7ZZQFnQc0d7n96TTNTQw60laLqpqtFdoIg9JomgdSrs0sBzoXgDg+EFqPBsp5uOTIBwH0DwR1c1NC5e9kcfgcciPG0GQBXgOAOrovF5vAlngzukLbyzmJzeEIZg0cBcAUI7uC6OPyOGJaLwxUQLGQWwP0GwR1cV9r0jURLC08kZ3CflpX3QTO3cnhCj+DuDB4FoNMhuINL4/AELUYmE104fPGpTS+aLRTJ/ZR1d7gCKYMHAuhcCO7g0gY9v4XN4Ul9IpnaoVDmo1XWmy3s+eSHBr3GBXMWARyG4A6uji/xUDdWMrW35rvFBp3asnEmfda2FqOeqaMAdDoEd3B1KU9/pdc0c/kSpnZo1Gt4Qvn5nQvMliPtHe4nCO5wDxg6dy9XIHEP6sbUDiWewWpFNe2BmDoEQOdCcId7g1Duq26sEsp9Gdlb/Z08vaaZdmwZxHe4PyC4w72h11PLCRah1yj5IjdGdqjXKgkW23KGVQLxHe4LCO5wzxg4ZS2bzTHoNVwBM+3vbA6XxeIcXzvFchXiO9zrENzhXpL2/GYWm9NiNDAyYIBRr+UJpQa95sS6aZZryfjO5vD4Yo/2HwuggyG4wz0mfdZ2NodnNBoYGXZGrajm8kR6nfr4uqmWa4fO3csVSA06FYvNbf+xADoSgjvce8gBAwxaZmKuqrGSwxMYdOrja2nie9qMHzJm72ox6jl8kcQzpP2HA+gYCO5wT0qbvjFj9s4Wo57F5rQ/BV7dWMXhCvVa5ZHVT9NuMHTuXqHUW6tq4PIlTN3RBXAqBHe4hw2du5fDFRoNWharvWeyWlHFYrP1WqW1uff6PfPtoOe3sDlcg07N4YtEbv7tPCKAU2GkU7gfHFzxKE8ol3gG19/JY2SHtrNlTqyfrlM3sdgckZt/Y0UBI0fsYHK/GIIgMIfqfQzBHe4T53cuUCuqDTqNTt3Yzl1xuEIOT8gXu6dkfm1js7PbX9U01Rj02hajXuIZem9FeblfDEG09Jn4RWcXBJwFwR3uN2S7CocnFLn5N9X849hOpF7hakWVXqu0J+GdivJ6tYLNFYjkvs21pY4dt8PI/boQBIHgfh9DcIf70+nNL2mV9Ua9lpzLic3lC6U+yvrbbd1PW3sznfrhBa2qwWjQGbQqaiH5S6NV1luONtxZENzvewju8EA4uWGmTt1oNOgNOlXrW5tgpKvq6c0vGXRqg06t1zQbDbr277CduAIph8sXSL0Q3AEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg3tdxMzFlZmaWlpbW1tYWFxc3NTUZjUaCIIRCYUhISO/evcPDwyMjI2fMmOHYzj/77LP8/Pw7d+7k5ORUV1drNBqCIHg8noeHR1xcnL+/f5cuXT744AMmXw+02+bNm2/dulVaWnrmzJmioqKGhgZqlVwuj4iISElJCQkJCQ8Pf+aZZzqxnAD2c52zmuPUvRMEsXz5cqFQKJVKr1y50qNHj1u3btXX1+t0/3+mMb1ez+fzw8PDe/XqtXv37oiIiKeffvrIkSP273/06NEsFuvGjRvp6emXL1+uqqqi3k2j0cjn88Vicb9+/X766ScejxcXF3f7ttVZND///HOCIKRSaWVlJbWQy+VyuVyxWKzVammf9dJLLxEEIRKJamtr7S+2A+Lj4+Pj4zMyMhoaGng8nlKpNF0rkUikUmlQUFBdXR3t06dOnUoQhFAorK//n2k8yRcoEom0Wu2QIUMIguDz+c3NzfYXLDExkdwP+Ztqj2XLlslksmvXrg0cOLCoqKi0tLSsrKylpYXaQKPR+Pj4BAYGJiUl7dq1q2vXrpmZmYcOHbK/VBTHXhSPxwsODh46dOgjjzwybdq0X375xc4nLliwgCAIsVh89+5d2g1SUlJSUlLefPPN3bt321+eVonF4ujo6Li4uEGDBl2+fNlyA6lUShAEi8Ui61WdZfv27QRByOXysrIy0+UJCQndunWbNm0a+Sm7u7sT7Sutr6+vr69vz549b9265cDT3dzcunfv3rt374cffvjUqVP2PKUjz+rOl5KSkp6evnz5cvKjss3Nze3NN9/s06dPVFSUPTvPysoaP358enr66NGj2Wx2q9v37du3e/fuGRkZS5Ysod3g888/J+O7GZlMFh8fP3/+fNpnvfTSS2R87wDvvPPO7NmzMzIyaNdGRUUNGDDgk08+oV3bq1cvMr5bkkqlZAQcMmQI+U+bJCYmkvHdTv369UtPT1+2bFlgYKA92wcEBLz//vtpaWl9+/Zta9kIR18UQRDu7u6PPPJIVlbWhAkTpkyZsm3bNnueNXHiRDK+27B58+YPP/zQgSLZFhYWlpmZGRMTExoampqaarZWKpWS8b0DeHp6Wvuwtm/fTsZ3S++///77779P/u/u7m5P0LDN4Y+e1L1793nz5vXu3Ts5OXnKlCm2N+7gs9oercdEh/n6+paUlKjV6oULF5rVFmk1NDR88MEHtbW1d+/elcvltjdesWLFqVOnRowYcfny5Z9++smen/czZ87k5+cPHDjw4sWL06dPt/dlEIRCoRg5cuT58+ftf4rz8Hg8syoP5ebNm2PGjDl27JjlqocfflitVm/cuJH2iR3240QQRExMTHl5uUajWbx48Z07d+x5Snl5+VtvvaXRaCoqKqKjo51dQkp9ff3vv/8+ffr0Y8eOPfTQQ7///ru1H3hTZWVlx48ft73N8ePHS0pKGCrm/ykuLt60aVNhYWFoaOjNmzfbHxwdFh0dbeMS+V6Rm5v75ZdfXrhwISkp6fz583Fxcda2dM2z2lnBPSIiQq/XGwyG06dPt+mJN2/eNBqNBoPBy8vL2jbbt2/Pz8/v3r379OnTrbVC0NLpdEuXLg0MDCwvL3/77bftf+Lq1av1ev3cuXPtf4qTuLu783i8J598knbtRx991Nzc/Nprr5ktv379emhoqF6vt3yKj4/PhQsXnFd9MJWenq7T6QQCgZ3XuabOnDnD5/P1en1aWpozymbD7du3J06c6O3tXVpaSnttZ6qgoODMmTO2tzl69GhbvxdtcuzYMZVKpdfrfX19nXcUG86cOdPS0tKzZ89OOTqzjEbjunXrdDqdWq0eMGCA5QYue1Y7JbgPGzaMIAg3N7eqqioHnt7Y2CgUCjkcTlJSEu0Gv/zyS0ZGxiuvvOJY8bKysnr16nX48GH7n9LU1NS7d28XqbzHx8ffuHGDx+NZrqqpqUlKSjILLr169dLpdH/88Qft3t544w2xWLx8+XKnlNXE9u3b5XJ5aGhoYWGhY3u4ceNGSEiIm5ubnS0kzPr888/79++/f/9+G9u8+eabEomEuqVkTW5uLpfL3blzJ6MF/B/19fVisVgikTzxxBPOO4oN/v7+fn5+O3bs6JSjM+7atWsBAQFCofDTTz81Xe7KZ7VTgntRUVFUVJRj9zFId+/eDQwM9PT0/Pbbb81WTZ8+vbq6evr06e25L/Tee+/V1dUNHDjQ/qeQlfcXX3zR4YMy5ccffxQIBNYa0FeuXKlWq6kb8WvWrPH09PT29qbdODIy8uTJk5bts85w+vTpzMzMNv2mWjp69GhmZqYDVSRGvPHGGwqFYvLkydY2KCkpyczMtGdXr7/+ujNaZkxVVVUlJibm5+c79SjWXLhwYcqUKW1KjnBxJ06ceOSRR06ePGm60JXPai6zuyMIIiEhob6+/sCBA9Y2SE1NzcjICAoKunHjxvnz548dO0bbXHDp0qVvv/326NGjlsuTkpL++usva/sfOHBgQkKCQCC4fv36wYMHrVWjZDKZh4fHjh07xo8fb8/rUqlUvXr1unDhgj0bO1tycvKVK1dkMplCoTBbpVKpunbtSuVLHD58eOLEidOmTaPdz1tvvXX48GHLZhxnKCwstNEWER0dPWLEiJCQkLq6ups3b/7xxx9m6UCUL7/80kaTnVPpdLrIyMjc3FxrG5SWltoZsmlvjTDu559/7tmz55IlS5YuXZqcnHzx4kWm9ty7d+9z587Z3oY86NatW//1r38xddzO9fnnn4eEhJguceWzmvngXlVV5evrS3s7xcPDg81ms1gshUJRXV2t0+kMBoOnp6fRaKypqbHcftmyZf3799+8efOkSZPIJfPmzTtx4sT69etpD921a9eGhgatVtvU1KRWq5VKZVhYWHh4OO0vzfHjx3fs2NGm033NmjWJiYmzZs367rvv7H+WbRkZGfanux4+fDgiIoIgiFWrVg0bNuzll19eunSp5WabN2/u2rXr8OHDMzIyzp49S2UgmElOTt6yZcvTTz9t7f1k1qlTp6xliy5ZsuTkyZONjY319fVarVahUISFhYWGhu7bt89y4zNnzqSkpOzcuXPcuHHtLNLHH39s9o26e/duQUHBvn37rN213rp1a3BwsLUdXrt2zTSv2YZjx45xOG1ORA4PD3/rrbeohyqV6ubNm6dOnTKrTpp6+OGH//nnH4IgAgICpk2bZjAYLLe5ePHi119/bbl89OjRjz32GO1uf/7551ZLm5OTs3DhQsv6WXv4+/vTnvO0fvzxR7VabWODESNGTJgwgXpYX19/48aN/fv337hxg3b7O3fuiMXiRYsWUclOLnhWUxhulpkxY4abm9vVq1ctV5FdioxG49GjR1esWPH2229/9dVXR48eNRqNbm5uQqHQ8imlpaVPPPFEXl4etSQ/P3/AgAG0Nf2wsDBvb283N7ezZ89u2bJl48aNR44cCQ8Pr6iosJY7uHbt2oKCAvtfnVqt7tmzJ4PVH4IgoqOjTV+gbenp6f/+97/J/1NSUs6fP+/n52e5mdFoDA4Ovnnz5vHjx/v06UN+ty3V1NTU1NS0muPFiO+++478FbdcNXz48GvXrvXv33/Tpk0fffTRl19++ddff4WGhtbW1tKGUaPROH/+/KampvaX6ueffzbNzddoNBqNprm5OSgo6Nlnn6V9ik6n0+v1tPd73nvvPbFYrFKp7Dn0xYsXr1+/3tYCe3p6UjUVg8GgUqk0Gk1gYODmzZtFIhHtUw4fPlxeXk4QxCOPPGI0Glks836LdXV11uqePXr0sPYjZ2dT/rJlyxQKxQ8//GDPxvaQy+W//fabnRs/+eST2dnZNjYgb1+R/2u1WvLTDw4OtpHMOm7cOKom6ppnNYXhmnt+fv7gwYNpf/fmzJlz+vTpoqIis+U1NTWxsbGPP/74F198YfmsXbt2cbn/V8iKigpr4fijjz7av3//mjVrTBceOHAgIyOjoqJCKBRa/oYfPHiwT58+a9eutdZ+bWnt2rWJiYnTp0/Pysqy8ymtamhosNZsYsPSpUvHjh37xhtv0Obn7d+/v1u3bo2NjdbS3ocOHVpUVMTsD5UNSqVy/vz5s2bNslw1bNiw6upqs+rYvn37RowYkZqaSntWVFRUiMXi9pfq+PHjtGmLzz77bHV1dbdu3a5cuWK59qmnnqKtnhcXFz/33HOWWVixsbGFhYVmIcBoNEql0mnTppndoGtVQUHB1q1bTZds3rz577//Xrx4sWmlnnL16lWy5vTcc8+16UBUOR04OSm5ubkLFixgtvJ+5coVBvt/qVQqsxe4YMECMs2atu23oKCAz+eT/7vmWU1huOZeU1NDe73G5XIPHjyYkpJC+6w+ffocPnyYNrf9zz//pKoVH3zwgUajob1PGxsbu2vXruHDh1uu+vvvv4VC4ZgxYyxX6XS66dOnt+nGr1arTUpKunTpkv1PcZ7U1NSTJ09aS5Ll8Xjdu3e31sOgtLQ0MjLSmaX7H1wu11qPTYFAQH1bTCUkJJw6dWoAHT6fb39vWAds2LAhKCjo1VdfpV1bWlpK23JaWlpKG8WGDx/erVs3y+UTJkxg5J7qpEmTQkNDt2zZQru2rq6Ots2zw3z44YfNzc3r1q3rxDK0yccffywUCs+ePUu79u7duxUVFeT/Ln5WMxncv//+ew6HQ5v+OGTIEF9fX2s5wl988UVQUNCgQYMsV6lUKoFAQNZuqqurqcZ3MxMnTqT+WoqLizt48CDtquzsbPKi1X4bNmwwGo2O1YOYNX/+fLlcbi1h/+LFi5a5RqQJEybweDxr74kzGAwGHx8f2lUnT56krSB/8cUXlm0IBEGEhYVdunTJgQbrNhkwYIC19NC6urrq6mrL5VevXqVt++7bty9tteb48eNM9fR56623GhsbrXXtbjU106ny8vKGDRvWMTeQmfLXX39Z60BTX19PhWAXP6uZbJaprq6eO3cu7eBf6enp1lp+SWFhYREREXv37rVcNXPmTPI1V1dX036pCILYsGHDs88+u2vXLtq1W7dudXd3Z7PZlq1j165dMx38wR46nS4xMZF2+I6Ol56evnnz5l69etmfg8/j8QoLC7t160Z7a8RJJBKJtfaH3bt3+/n5+fr6WlYLTpw4Ybk97ULG2bgVUV9fb9nAvWzZsrVr19IG6y1btowdO/b77783W37u3Dk3N7f2F4b8W4UAACAASURBVJXEZrMlEgntKj6fb21kpI6xfPny5OTkrKysNvUMd03u7u5UdHbxs5rJmntVVZW1e4NZWVnh4eE2nhsREZGdnT2ODnV1k5eXR7t/LpdbU1Pz7rvv2th/cHAw7aVxXl6eA5fGmzZtMhqNdmY0O9XkyZNramqs/ebRmjFjBp/Ptza+h5M8//zzllmbJJ1Op9VquVxufHz8U0891ZGlcoxUKjW9D0QqKSmhvXPj7++vUqm+/PJLy1U6nU4ikSxevJiRUjU3N9P2o/H29vbw8GDkEA4rKCi4tyrvixcvDg0NpV3l4+ND9ft18bOayeB+/fp1a5XBW7duWRuui/Tqq6/S3kzw9vYuLi4ma+4lJSW0PTLIPBnbZYuOjo6JibFcrlKp2jSAAUmv11u729bxzp8/z+Vyae83WJLL5bm5ub169XJ2qSzJZDJreXVVVVV37tyJj4/Pz89PTEx8+umnO7hslsaPH2/titvDw8PT09NsYWlpKe292X79+rm5uTU2NtJG2EmTJjHS7N6tWzeyf7zlqpCQENozv4MtX75cqVQymEPsVCdPnrRWdQsKCjK9QnLls5rJZpnS0lLaJEWCIAQCQav3ClrtjV1fX0+bdRQUFGQ0Gm3fFw0JCaFt6iIIgjbzt1Xbtm2Lj49n5AM7ffq0jeH6YmJivLy8BgwYQCVBWoqKirIzRsybN+/UqVPffPONIwVtn65du9ruor1r1y42mz1x4sSrV68mJycnJiZu2LChw4pn5urVq4MHD6btPe/n52dZEcnNzW1sbLTcuG/fvrdv3ybDrmWC87Fjx6ydlvbr1q1bQ0NDWFgYbW1jyJAh7ekrzpQbN2689tprx48ff/TRR9u5q9raWhvfF09PT7FYHBwcbKMfpQ1ZWVn79++/c+cObUILQRB79uwxzc5w5bOayZp7bW0t7fnt6+trrTWwTayNN+Dn59dqzd3Ly4s2JZwgiLi4uE2bNtl+umUbK1OV9w0bNtj+7hUWFg4YMMD2WAv79+/n8Xit9gMMCAg4d+5cv379HClou/36669sNnvs2LE2tjEajVu2bLl69WpiYmJubm6fPn0cnr/FYStXrnziiSf4fL61cVFSUlLMquGffvqpSCSiTUzKysoKCgoKCgqivad66tSpa9eutal4Op2OTK7o27dvly5dPD09i4uL3dzcrJ2Kf/75J9nxrSPRJt1//PHHSqWynXd3b9y4YbtfEplIbn+NraCggHw/e/XqFR4evnLlyuHDh+fl5dH2VxCLxVKpdMWKFdQSVz6rmQzujY2NtMFdIpHIZDIGD2RGLBa3OkSwXC63lkO6ZMmSVm830X4Y27ZtMxqN7bxVpdPpmlqj1+tbvevbvXv3wsJC2uwryqJFiyQSyXvvvdeeArdHXFzcjRs3aIfWM6XX6zds2JCbm5uUlJSTk9O/f38nDekTFBQ0YsSIh/9r8ODBCQkJa9euHTFihI3ebatWrTLrh1JSUkJ7hnC53Pr6+sWLFwcHB9PW17RarUQisX27yFRhYSH1VSLnkFEqlQqFwlpk79+/f0NDw2effWbn/pkyevRoy2HNi4qKhgwZ0s4EIaPR2Or3RavV2pklsWPHDqrLApm8mJOTM336dGsJjrNnz7ZsrHO1s5rCZHBXKpW0wV0gENB2QGWKQCAQCAStbmOtDM3NzdZakyi9evWyzJQ3Go3x8fEdk0Tc6sm6detWPp8/c+ZMaxvExMT8/vvvHT9erqndu3eTE11ZG+/TlE6n+/777y9fvtyzZ8+8vLzHH3+c9rZke8TExJgmnwmFQqFQmJub++KLL1obA2TQoEEVFRVm905LSkpoG9x79OhBpieSA9XR7vDZZ5+1v9m9qanphImcnBwb1VgyPcxsLJSOIZFIaAcs+vjjj63FTWbZOargnTt3TN9Py75mpkJCQg4cONCnTx+z5a52VlOYDO7WLoW4XG77GxZtsGf/bDbbMsOBpFar7bmIo21Z2rFjB7M9htsjJCTERs/soUOHVldXv/zyyx1ZJEsnTpyQyWRCoXDhwoW0oxabUavVK1euPHv27JAhQ37//ff2TKxj6dChQ3/8r/Pnz9u+FLt9+3ZYWJjZwsuXL9OmgvTt25e6dx0eHh4fH2+5zbFjx5wxPCSPx1u3bl1gYKCNYWec6vTp05b97IuLi4OCgjqlPO0UGBjY3Nx89+5d2txHlzqrKUwGd4FAQPvCtFqtYzct7WTP/vV6vbU7ulKp1J7Pw8fHhzalqcOmLmvVmTNnrOVvEQTxww8/cDgcV0g0vnTpUkZGxokTJ2JjY+28AdDU1DRv3jy9Xl9VVeWkb4I9Ro8ezePxzIax/eqrrwQCAW02ap8+fahY1rNnT9oZUU6cOGH/4EL2e+WVV3777beRI0cyvmc7CQSC119/3XL5J5980qbJbF1EXV0dn88vLS21toELntVMBneJRELbKUOlUlm7yGWEWq1udbQmlUpl7QJWIpHYbqomBQcHX7t2zXKy1t27d3fAJB6t9nZJTEzU6XR///23tQ2ampoSExNdZOCE5cuXHzlyRCKRlJWVWbvZaCk7O9vX11etVnfkvICUuLi4/Pz82NhYs+UlJSUvvPAC7VM++eQTKrhHR0fTvkylUikSiewf6dBOn3/++cCBA/fs2cPsbu3n4eFx6NAhy6ucsrIyy/5cjGN8Ciq5XK5UKm2PyutqZzWTqZBkALJsg7ZzEFSHNTY2ttpoXl9fb61Z5r333rNnyj1vb28Wi/XUU09ZJlG058rXnt/5xMTEyspKGxusWbOGHFrE9t2q9evXx8fHjxkzphO/86bI2QlSUlLIL0NQUFCrE9RlZ2e/9NJLHT+q/vDhw2/dusXj8X766SezVcXFxbTtKiKRKD8/n2qd//PPP60lzk6dOpXxlhlyVsj4+Hg/Pz/bJ4+TNDc3i0Si1157bc6cOWar2vN9cXNzox0nylRkZKTlAIXtVFlZ6eXlJRKJhg4danvcDtc5q5msufv4+NBmrTQ2NjJSc7dWvy4vL2/19K2qqrI2hkxeXp61QWnMxMfH5+XlWVbe2yM1NdX2m+Pv73/9+nVreZykI0eOPP30062OiKDX66Oiotqae+dsp0+fvn37dlBQ0O3btwMDAy1vWJnJysricrnLli3rmOLFxcVlZWXx+fyIiAjat+7SpUu044WpVCrT2+DHjh2bPXs27SHsb3aXSqV9/1efPn1s5AHfvXs3PDzcebfsbBswYMChQ4eYTcT08/OzPbeURCKpq6uzc1C8gIAAs/czOTnZ2uDJd+/e7dq1q50/G65wVjNZcw8LC2tpaaG98O/Spcvbb7/twIQsUVFRnp6effv2XblypY+Pj0ajsbwyKCkpaTXg3rp1y1pGjT0drEg7duzo3r37hAkTzMZcbSe5XN6eAYQ/+uijU6dOffDBB/ZsvGfPnqioqEGDBrna/Gdk7aZPnz7klyEoKMjasHxqtXrkyJGMdMyJjIy0vJ4TCATkxIQ9e/bcsmWLr6/viRMnxowZQ3u74ttvv125cqUDI7ObOn78uJ2DzMTExCiVSiqpt6Wlpbm5mcvlktnG1GiFlMrKykWLFnVWV+o5c+ZMmjTp9ddft/ar5pja2lqmppeZMGHCtWvXqEQmMs+ya9euEyZMeOuttyzbAw4ePJiYmLhgwYKPP/7Ynv13yllNYbISGhsbGxcXR7vq7bfftt1isHDhQsvWTIIgbt682bdv34CAAIIgoqKiEhISLLeprKy0NhkKpaioKCcnx3K5j4+PtV7mtMjxtqy18HSK48eP9+vXz/7TIigoqLi42KlFctjZs2fv3LkTFBQkl8tXrlxpLXv10KFDjGSg1tTUmKW+sdlsMjlSLBaXl5c//fTThw4dWrt2rbUb0SUlJe3PVm5sbBSJRHbGCz6ff+a/zp49m5eXV1FRIZPJrGVtbd++3cZtQGcbOHBgdna2teEqXUFcXBz1fp47d+769esTJky4cOEC7TQJBEGMHDmyredeB5/VFIabZWiTvQiCOHv2rO1RIW/dujV69GjaVT179iT/SUhIsPbj4enpaSMP5OuvvxaLxbS/Lt26devSpYuNgpnZunUr2ZnY/qc41euvv65UKq3NyEHryJEjOp2ue/fulqsca3GykTvo2K/g2bNnx44dm5ub+5///Id2g7KyMkYalxobG2/cuFFoIj8//9KlS4cPH/7hhx++/vpr2wMiEdYz3Ntq+vTp7Wl2r6io8PDwoM0yvHr1aifeRZ89e7ZYLLYxsZELWrRoUUREhLWr84KCAmtzJNjWYWc1heHgbq0v3L59+2zP7V1WVnbo0CHaVV9++SVZc/f19U1MTKTdZtSoUTbyyS5fvmwtn6F79+5tvbHerVu33NxcF6m8nzlzJjk52doPvrXWWC8vLx8fH8ukBZFI5EB3s/r6etorJ5lMRuWJcrlccvpc0w14PJ5AIKBtkXjxxRd79er1/fff0+YnFBcXt2kgTOe5cOECI9MMtT/b3cfHh7ahubGxsWP6DVkzcODAgwcPWptSxjV9/PHH1i53SktLqbt3Ln5WMxncJ06cyOPxaOPv1atXy8vLhw4dSvvE4cOHl5WV0bZGkZ2YyXmw/Pz81q5dS7uHH3/8kcViLVy40HLV9u3bVSrV5s2baZ/4yy+/2L5XaWnTpk1sNtsVRi6cOnWqRqNZuXIl7drMzExrDfG5ubn/+te/LJvd3d3dLcc7JAUFBVmmPZAaGhpoZ9r09fWlTmKxWMxms8362ep0OtrpD0kzZswoKSkhf9fN6PX6zp2AgrRmzRo+n89IG9fx48fbOUOARCKx1pWv1Vwyp5o5c6ZYLKb9bt6L1Go1Ncyvi5/VDE+zFxISYm0MndjY2JaWFst83hUrVrDZ7JiYGNqOv08++SRVs549e7ZMJqMdw6Guri4tLY324uDPP/989NFHabOvfHx8BALBV199ZftFWerevXtubq49XZ+cKicnJz4+njbZRigU3r1796effqJtfiEI4oMPPlAoFNQk7qTw8HBr1zFjx449d+6c5fKkpCRr08f4+vpSmRJubm609zYaGhrkcvmIESMsV2VlZZHTfNPu2d3dnfagHamkpMRaj9/MzMyPraCdcezu3btCobA9aS1O7QTeTqmpqQcOHHCFkYcZQUUqFz+rGW5biIuLo51NiSCIgwcPLl269PTp088///zq1avJhTNnzjx8+PAjjzwyd+5c2mdlZ2cPGTKESiyNiIiIjY2lnbXkyy+/jI+PHzRoUP/+/T/66CNyydGjR8vLy2nnqicI4rHHHisoKLAxRJQ1Gzdu7NWrV2ZmJiMzQ1ZWVlobEtpUcHCwXC5PSEiYPHkyQRBPPPFEUVHRxo0baTeePXv22bNn6+vrrQ1pUlxcPGvWLLN30t3dnXZKE4IgVq1alZycPGbMmMGDB1MRLSEhoba2Njo6mrZVt1+/flSNvmvXriqVijYbNTk5uaKiYtiwYaZjtC5fvvzUqVOzZs2ivZUSGhoqkUic0Wu/TaxluBMEkZeXFxoaavldra+vnzRpEm2q0qxZszr9FTnJ9OnTp06dunDhQvtnordBLBbb832RyWQCgcDHx8fOO9UOcPGzmuGa+7vvvtvc3Gyt8r5kyRJ/f/+///47Nja2Z8+eUVFR+/fv9/HxsRbZ09PTm5qaTO8/xMbGHjlyhLYhRa1WX7lypX///jt37nRzc3Nzc1u9enVaWtqFCxfu3LljuT2Xy83JyenatatDL5RITEzMyclpf+Xd/olMy8rKyGBKPszPz4+MjKS94vby8srJyenTp09ubi6fzx82bBjtDj/99FOlUmk6DXRwcPA333xDe1tVq9UWFBQMHjz4m2++kcvlcrlcKBTeunVLJpNZu1/366+/UqOL+Pr6pqen0272119/+fr6Xrp0ydPTMyYmpnv37hEREZs2bYqOjrbWZy89Pb3VQZ47wLlz52gb3L29vWtra5ctW7bAQlhYmOmAsaaOHTvmsllM7Zeamrp//35rCRH2Ky8vt3MoNIVC4ePjQ/vdZ4qLn9XM3xWMi4srLi62Nm3j6tWreTxebGysj49PQ0NDUVHRqlWrrO2qsrIyPDzc9IxfsGDBk08+uWjRonnz5llur9VqyTq7t7e3QCDIy8uj3Yw0derUixcvWmvEb9W6det69+49efLkNWvWOLYH0q1bt+zPYuzZsyc5fllqauqdO3d+/vln2s0WLFhw/PhxcjryyMjIsrIy2vlj7969m5SUZHqrY8KECfHx8aNHj969e7flbuvr68k6u7u7u1gsJr821ubeCgsL8/X1pWY8CA8P/+OPP6y9LrJ2I5PJeDyeTCZTKpWFhYU2Wml///33Rx55xNrajrFx48YvvviCNoWc7HJMmx42c+bM0NBQDw8Pyyuqo0ePus44RYybOnXq9OnT33jjjXbOLK9QKH799Vc7N25ubnbqFIMuflYzXHMnCGL37t1isdjG6IM6nS43N3ffvn20DU+UadOmiUSiw4cPmy1PS0vbs2ePtaZkUk1Nje20ei8vryNHjiQnJ9vYplU9evS4dOmSPePSMIgcdKmkpMRyvGxSRETE6dOnBw4cSD48cOCAQCCwdvv3m2++0Wg0pt+32NjYVuuP9fX1rVaI5s+fbzqK2bJly5qamkaNGmXjKQqF4urVqydOnLh586aN9Mphw4ZZ3i3oeCUlJdaa+/r162c5ICIlPj6edsCJyspKoVBo7fb4fYCsvNN2VXEeBybRtJ+Ln9XMB3eCIFJSUs6fP9/qEBA29OvX79KlS1SGu6l58+bV1tZWV1fb+P7YJhKJQkNDq6urqaZ/x6xZs4bD4bSzJuKAhIQEnU5nbbrhd955Ry6Xv/HGG9QSch4P2k7VKpUqLi7OtHsX+dvczlmbhw0b9vvvv/fv3990YUxMTG5ubjtrUlKpNC8vz87O5U5VUlJi7SNYu3atjZMzODjY2pBSs2fPdrjJ1ZVvqJKee+45qVR6H6TNmF4Eu/JZ7ZTg/umnn7q7u//zzz+OjWM5YMCA2tpaHo9nrcWDTDNXKBQOvKdcLnf9+vWxsbGMJP8mJSVdvHjRqVORmOHz+b6+vtYSFnv16rVly5aMjAzThZs2bRKJRNZa+jZu3KjVak3vUKWlpZ07d86BsSJI3bp1Ky4uNhgMZrdSfvvtN4VCoVKpHH67uFyuRqNpbGx0bHpMZp05c4Y2uJOzL7355pvWnhgcHGyt9/zx48cdbnb38PBwkb4XNqSmpv7111+2L7tdhIeHB+3NJ51OR6VCEq59VjsluBMEsWfPHg8Pj5aWlvfee69NL3vKlCkajcbb27vVTk9sNlsqlbZpxOrExMSePXv++OOP1nrDttXq1as5HM6UKVMY2Zs9qqurycl2ra29e/eu5cVE3759c3JyaNMcjUZjZGSkacrQsmXLvLy8Ghsbly9f3tY7xmT7j0AgoD1TyWtksVhsrTOaDTExMWKxuKWlxRVmR9m2bRuXy6XtN5eUlGS7w867777b0NBAGzgOHz588eJFx4okEomsvatSqZT2IrjjPfPMM1KpdNGiRZ1dkNb17duXdmalmzdv8ni8zMxMaonLntXOCu4EQWRnZw8ePPjo0aPJycmTJk2yPc0pm81+7LHHEhISLl68mJiYSJvsaKauri4hIYGccabVCQzj4uKWLl0qk8nUavWOHTsmTJjQthdjXXJy8sGDB62NJMc4g8FgrWvSiBEjeDwe7eDyn3zyiY0vleUdqq1bt6alpWVnZ/fr1++FF16w50bfo48+GhcXl5ubm5iYaGOkKrVaHRwc7O3tvWrVKmqWItu6d+/+5Zdf+vr6+vv7d25/HFO008gRBJGSkkLbRcWUUCjs0aOH5fLbt287nN3h5+eXnZ1NeyfGpRLM09LSNmzYQPvyXUpUVNS8efMsv9dGozE1NdVsoWue1fTdT5hy6NChoqKi9PT0goKC6Ojojz76KCQkJDIy0tfXVy6Xx8TE9OzZc8iQIa+88kplZWVJSUl0dPSRI0fsHwrjxo0bixYtOn/+fHNzs0wme+211yIjI4ODg93d3f38/Hr27Dlo0KDRo0dXVVV5eHio1erU1FQbAzo+9NBD+/btI6dDNF1ODuoWFxdnOZY3QRDnzp0j53RnsVh2TsvrmPj4+OrqarVaXVBQwGazzU4IPz+/5ubmqKgoa7epn3/++T///NPy1ZEsG6kOHDhw8+bNUaNG5eTkcLlcNze3l19+2d/fPzAw0NPT09fXNy4uLjk5eeTIkdTH16VLl2PHjuXm5tp+IZWVlQsXLjx//rxarfb09Fy2bFlISEhAQEBgYKCHh0dAQEBsbGxiYuLQoUNnzpxZVlbm7u6uUqmGDh1qrZuxbREREbdu3eLz+QxOAPTUU0/t2rVLLpebdc2Nioqqra2Ni4uzNvgfqUuXLuXl5Vwu17Ifo417bu7u7mq1WiaT0SZWnzp1isPhKBQKs3PD9rNsIM+38PBwy6QG2yIiIurr6wMCAmgHKP/xxx+lUmlFRQXZHEEtT0hIqKqqioiIIIchITt5slgsO2dDteTr60tmy1jLRuvSpUttbW1wcDBtI8GcOXN+/fVXcvw40+91aGhoQ0ODn5+fWY/iDj6r7dFxN2F27txZWlpaV1d38+bNqqoqpVLJ5XK9vb2joqK8vLxCQ0Pb2aH/008/ra2tbWxsLCsrq62tNRqNbm5ugYGBMpnMzc3tnXfeYeqFPJjeeeedmpoahUJRXl6uUChaWlpEIpGvr29kZKS3t3dISIhjF0Pr16+/c+dObW3tP//8U1NTQ/a2FYlEXl5eYWFhnp6eAQEBrjA1IID9cFYDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhw9ZHkwIZu3bqR/fdYLBaLxeJyuZ04zz0AuBQnji0DTkX2dCfn5zUaja4/IiAAdCQE93tSUlKSWq0WiURXrly5du0ai8Vidt50ALjXIbjfkyIiInx8fMgxwmbNmsXn81taWtAmAwAUtLk73Zo1a9RqNTmLqUAgsHPAoKysLIPBwOVyWSyWUCg0G1VtzJgxERERBEEcO3bMaDT27t37u+++o9Zu375dpVK1tLTodDoOhzNt2jRmXxFl3bp1BoOBIAiDwTBz5kwnHQXs0c7PYtWqVTqdjsvlkkPCdfz8YsA45w75e58h527ncDg2xmWlvPbaawKBQCKRnDhxYtCgQU1NTRKJ5PPPP/f29o6Pjx87dqzlQKM7duwIDAz08vKqqanJyclJTU3V6XRSqXTZsmVyubxLly4jRoy4dOnSzJkzyUlic3NzxWIxn8+PjY09evQoQRDkSNN5eXlpaWkKhYLH433yySccDsff3z85OZkc7NfG0MQxMTExMTFz586VyWQymez27dve3t7e3t6JiYmm079lZmZyuVyhUHjmzJnU1FS9Xv/ZZ5/p9Xp3d/fo6GjTIYXJ4bCpIwoEAoFA4O7uTo6T1yZkwBKJROTcCCwWi81mc7lcakjYtLQ0giB4PB6LxZJIJAEBAeTH1OrrHT9+/MmTJ2k34PP5AoHAzc3tmWeeMT06xcvLa9CgQSNGjJg1a9Yvv/xCu5OwsLDw8PCRI0eaTmdI6t27d+/evRcsWGDtuQRBBAYGBgYGpqammk6oQmn1s7B90o4fP57FYgkEgrNnz6ampqpUKplM9sUXX0RFRQ0YMGDmzJnUBNAOvP/19fXUgcgzk8fj2fjoN23aRBAEeeL5+Pj4+vomJyfTzjMOwLC4uDjyq9Kq5OTklJSU1157zXKKEqlU+sorr/Tp08dsvoLp06c//fTTO3bs6NOnj+UOZTLZlClTyDr4zJkzTatmixcvJqc8dXNzCwgIsJxJgMvlDhkyJCIiQiwWi8Vi2yWfP3/+J598Qn7NSGlpaeT3luTv7x8TE5OZmWk5j0GPHj0eeuihbdu2kQ83bdrUv39/s818fHxaLQMts1dNEASPxwsLC6OuaUzLGRERYf/rnT9/vo0NyJ83y6OT2Gx2SkpKVlbWU089NXXqVGs7efbZZ63Nxr5mzRrT6SRnzpxpOZfmE0880a1bN8vn2vNZ2DhpfXx8oqKixo8fbzktVEhIyFdfffX4449Tsy068P6bbhwWFmZ5ZsbGxppOILNp0ybTE2/w4MGDBw+mLTnYA23uzHv88cc1Go1Wq/30008bGxvN1jY1NX3xxRdarVar1T7++OPkwsWLF9+5c0csFo8fP552ngeFQmE7H2bcuHGenp5KpdJyYk+9Xp+dnU07r1tbBQUFkfM9btq0SaVSma3NyckxnXEwPz//xRdfNNusurra29t7xowZ7S+MTqcbOHCgjVmfOoDRaDx9+vT06dPlcrmNGfI2b96s1+ufeuqpVndYUFAwfPhws4V//fWXp6fnxo0bTRe26bOwFB4ertfrGxsbd+zYYTkhRmlp6csvvyyRSBQKxSeffEK7B/vf/xUrVnh7e1tOrzZmzJhr1661+nRwDII788hpp0y/6lwu19fX1zQ65+TkdOnShbrQPnHiRFJSUlZWlul+eDyeaY0sJyfHRoAuKyvr3bt3Q0MDdcQuXbrIZDLyYVxcXGhoqJ3ltzZv6osvvujh4SEWiysqKqiFQqGQmiPXz89v+/bt1KrCwkJq7io/Pz9qNvOHHnqItoXBAdu2bdPr9aaze3cMDw+PwMBA049j7dq1AoHA2pwwer2+a9eutHOumqmqqqKaaKjp8VQq1fTp0/Pz86nN2vpZmFm+fLm/v7+bm1t1dbXp0318fEw327p1a3p6uo05L+18//Pz8ydPnkz9hFCva8+ePbdv37b9XHAYgjvD5s+fLxKJTJtQx40b5+fn19TU5O/vbzpd0S+//CIWixctWvTvf/+bIIhPP/2UWtWtWzepVErdEQ0ODn711Vc5HM73339v7bhKpdK0Ed/f318oFHI4nMjIyLfffvvVV18lL5PJHcbFe7TH3QAAEEdJREFUxZlO7hUdHe3m5kYQRExMzMmTJwUCAe0hrl69mp6eTn0bZTLZtm3bYmJiDAZDRETEO++8M3fuXIPBMHHiRIIgduzYUVNT8+eff5Ibp6Sk9OvXj3rhpjGlPYxGY1RUlI2fCnter4398/l82jbiOXPmREREhIeHd+3alVr40EMP2bgZs2vXLr1e/9BDD9k43Jw5c1QqFTUf3nPPPUc16/3000+FhYXUlm36LCzl5eWNHj3atDl76dKl4eHhTU1NHh4epg2Gn332mY342+r7TyoqKvr555/J/93d3SdPnkz+n5+f39TU9Oabb9p+OjgGwZ1hd+7cGTJkCPUwODi4uLh4wIABSqVy4MCBRUVFQUFB1NqRI0feuXOnuLh48ODBVFzw8PAwGAzkVbNerzcYDORPgu1JwPV6venF9bRp02JjY59++um5c+e6ubk1NDSQZdDpdAaD4c033zSdZZvH4/n7+xMEUVhYePLkSaq+b6a6unrnzp3UwyVLlhw+fHjx4sU6nW7y5MkcDkev11MRPD8/f9asWdSc7v369aMaZCsrK5VK5axZs1p9M60JDg4ODg4m///1118NBoPpe06x8/V+/vnnZk9MSkpatGjR4sWLX3vttXnz5tXU1FjufOjQoSEhIaaNws3NzZYziffu3Zv6PyIi4saNGzZeV35+/qOPPko93L1798CBA8n///zzz5qaGuonqk2fhaWSkpIff/yRejh27NiCgoJnnnlGpVKFhoaaTtJdUVHR0NBgNie7ne8/6bvvvquvrz9y5Aj5sF+/fqZzET/55JNomXESdGtkWH19velMxKNGjWpsbCRn5d6+ffuECRN69OhB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";

const LogoConexus = ({ height = 70 }) => (
  <img
    src={LOGO_B64}
    alt="Conexus Partners Logística Internacional"
    style={{ height, width: "auto", objectFit: "contain" }}
  />
);

// ── SMALL HELPERS ────────────────────────────────────────────────────────────
const Th = ({ children, center }) => (
  <th style={{ padding: "7px 8px", background: GOLD + "33", color: GOLD, fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.06em", textAlign: center ? "center" : "left", borderBottom: `2px solid ${GOLD}55`, whiteSpace: "nowrap" }}>
    {children}
  </th>
);

const EditCell = ({ value, onChange, align = "left", mono, placeholder = "..." }) => (
  <input
    value={value}
    onChange={e => onChange(e.target.value)}
    placeholder={placeholder}
    style={{ background: "transparent", border: "none", outline: "none", color: mono ? GOLD : TEXT, fontFamily: mono ? "monospace" : "inherit", fontSize: 12, width: "100%", textAlign: align, padding: "2px 4px", borderBottom: `1px dashed ${BORDER}` }}
  />
);

const FieldRow = ({ label, value, onChange, bold }) => (
  <tr>
    <td style={{ padding: "3px 6px", fontWeight: 700, color: TEXT, fontSize: 12, whiteSpace: "nowrap", width: 140 }}>{label}</td>
    <td style={{ padding: "3px 6px" }}>
      <EditCell value={value} onChange={onChange} />
    </td>
  </tr>
);

// ── DEFAULT STATE ─────────────────────────────────────────────────────────────
const defaultOrigem = [
  { taxa: "Frete aéreo", moeda: "USD", valor: "1,85", un: "kg", qtde: "200", total: "" },
  { taxa: "AWB Fee", moeda: "USD", valor: "30,00", un: "awb", qtde: "1", total: "" },
  { taxa: "Pick-up / Coleta", moeda: "USD", valor: "135,00", un: "processo", qtde: "1", total: "" },
  { taxa: "Fuel", moeda: "USD", valor: "0,25", un: "kg mín. 50,00", qtde: "200", total: "" },
  { taxa: "Handling at origin", moeda: "USD", valor: "30,00", un: "awb", qtde: "1", total: "" },
  { taxa: "In/Out fee", moeda: "USD", valor: "0,08", un: "kg mín. 45,00", qtde: "200", total: "45" },
  { taxa: "Screening Charge", moeda: "USD", valor: "0,15", un: "kg mín. 30,00", qtde: "200", total: "" },
  { taxa: "Sed Fee", moeda: "USD", valor: "25,00", un: "awb", qtde: "1", total: "" },
  { taxa: "TRA", moeda: "USD", valor: "0,08", un: "kg mín. 65,00", qtde: "200", total: "65" },
];
const defaultDestino = [
  { taxa: "Desconsolidação", moeda: "USD", valor: "100,00", un: "AWB", qtde: "1", total: "" },
  { taxa: "Collect Fee", moeda: "USD", valor: "3%", un: "mínimo 35,00", qtde: "1", total: "35" },
  { taxa: "Delivery Fee", moeda: "USD", valor: "50,00", un: "processo", qtde: "1", total: "" },
  { taxa: "Seguro internacional", moeda: "BRL", valor: "166,00", un: "processo", qtde: "1", total: "" },
  { taxa: "Handling", moeda: "EUR", valor: "50,00", un: "processo", qtde: "1", total: "" },
];
const defaultRemarks = [
  { label: "Honorários + SDA + LI", valor: "R$ 1.000,00" },
];
const defaultEntrega = [
  { label: "Frete Peso", valor: "700" },
  { label: "Ad-valorem", valor: "0,001" },
  { label: "Gris", valor: "0,0005" },
  { label: "Tx. Cte", valor: "40" },
  { label: "ICMS / ISS", valor: "conforme legislação" },
];

// ── CALCULAR TOTAL ────────────────────────────────────────────────────────────
const calcTotal = (row) => {
  if (row.total) return parseFloat(row.total.replace(",", ".")) || 0;
  const v = parseFloat(row.valor.replace(",", ".")) || 0;
  const q = parseFloat(row.qtde.replace(",", ".")) || 0;
  return v * q;
};

// ── TABELA DE TAXAS ──────────────────────────────────────────────────────────
const TabelaTaxas = ({ title, rows, onChange, onAdd, onRemove, subTotal }) => (
  <div style={{ marginBottom: 18 }}>
    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
      <thead>
        <tr>
          <th colSpan={7} style={{ padding: "8px 10px", background: GOLD + "22", color: GOLD, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", textAlign: "left", borderBottom: `2px solid ${GOLD}55` }}>
            {title}
          </th>
        </tr>
        <tr style={{ background: "#161616" }}>
          <Th>Taxa</Th>
          <Th center>Moeda</Th>
          <Th center>Valor Unitário</Th>
          <Th>Unidade Embarque</Th>
          <Th center>Qtde.</Th>
          <Th center>Total</Th>
          <Th center></Th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => {
          const tot = calcTotal(row);
          return (
            <tr key={i} style={{ borderBottom: `1px solid ${BORDER}22` }}
              onMouseOver={e => e.currentTarget.style.background = "#ffffff05"}
              onMouseOut={e => e.currentTarget.style.background = "transparent"}>
              <td style={{ padding: "5px 8px", minWidth: 130 }}>
                <EditCell value={row.taxa} onChange={v => onChange(i, "taxa", v)} />
              </td>
              <td style={{ padding: "5px 8px", textAlign: "center", width: 55 }}>
                <EditCell value={row.moeda} onChange={v => onChange(i, "moeda", v)} align="center" />
              </td>
              <td style={{ padding: "5px 8px", textAlign: "center", width: 90 }}>
                <EditCell value={row.valor} onChange={v => onChange(i, "valor", v)} align="center" mono />
              </td>
              <td style={{ padding: "5px 8px", minWidth: 110 }}>
                <EditCell value={row.un} onChange={v => onChange(i, "un", v)} />
              </td>
              <td style={{ padding: "5px 8px", textAlign: "center", width: 55 }}>
                <EditCell value={row.qtde} onChange={v => onChange(i, "qtde", v)} align="center" mono />
              </td>
              <td style={{ padding: "5px 8px", textAlign: "center", width: 70, color: GOLD, fontWeight: 700, fontFamily: "monospace" }}>
                {row.total ? row.total : (tot > 0 ? tot.toFixed(2) : "—")}
              </td>
              <td style={{ padding: "5px 4px", textAlign: "center", width: 28 }}>
                <button onClick={() => onRemove(i)} style={{ background: "none", border: "none", color: DIM, cursor: "pointer", fontSize: 14, lineHeight: 1 }}
                  onMouseOver={e => e.currentTarget.style.color = RED} onMouseOut={e => e.currentTarget.style.color = DIM}>×</button>
              </td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={5} style={{ padding: "6px 8px", textAlign: "right", fontWeight: 700, color: MUTED, fontSize: 11 }}>Sub-total</td>
          <td style={{ padding: "6px 8px", textAlign: "center", fontWeight: 800, color: GOLD, fontFamily: "monospace", borderTop: `1px solid ${GOLD}44` }}>{subTotal.toFixed(2)}</td>
          <td />
        </tr>
        <tr>
          <td colSpan={7} style={{ padding: "4px 8px" }}>
            <button onClick={onAdd} style={{ background: GOLD + "18", color: GOLD, border: `1px dashed ${GOLD}55`, borderRadius: 5, padding: "3px 12px", fontSize: 11, cursor: "pointer", fontFamily: "inherit" }}>
              + Adicionar linha
            </button>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
);

// ── COMPONENT PRINCIPAL ───────────────────────────────────────────────────────
export default function Proposta({ onBack }) {
  // Cabeçalho / Dados do processo
  const [header, setHeader] = useState({
    cotacao: "CP250884",
    tipo: "IMPORTAÇÃO",
    cliente: "FUNDAÇÃO COPPETEC",
    cnpj: "72.060.999/0001-75",
    data: new Date().toLocaleDateString("pt-BR"),
    incoterm: "EXW",
    origem: "6965 Piazza Grande Ave #309 - Orlando, FL 32835 US",
    destino: "Rio de Janeiro",
    entrega: "Av Moniz de Aragão 360 - Rio de Janeiro-RJ – 21941-594 Brasil",
    dimensao: "1 box: 96.5 cm x 86.4 cm x 99 cm e 154 kg / 1 sealed pallet: 66 cm x 66 cm x 81.3 cm e 45.4 kg",
    pesoTaxado: "200 kilos",
    frequencia: "Diário",
    rota: "Via LIS",
    transit: "3-4 dias",
    valorMerc: "USD 55.046,30",
    validade: "14 dias úteis para embarque",
    observacao: "Carga Geral - Não IMO - sujeita a confirmação de espaço",
  });
  const [hdrInfo, setHdrInfo] = useState({
    razaoSocial: "CONEXUS PARTNERS LTDA",
    endereco: "RUA DAS ESMERALDAS, 395 - 12º ANDAR - BAIRRO JARDIM - SANTO ANDRÉ - SP - BRASIL",
    cep: "CEP: 09090-770 — FONE: (11) 98775-2588 / (11) 4124-8898",
    cnpj: "22.627.918/0001-06",
    site: "www.conexuspartners.com.br",
  });
  const [taxasOrigem, setTaxasOrigem] = useState(defaultOrigem);
  const [taxasDestino, setTaxasDestino] = useState(defaultDestino);
  const [remarks, setRemarks] = useState(defaultRemarks);
  const [entrega, setEntrega] = useState(defaultEntrega);
  const [obsGeral, setObsGeral] = useState("");
  const [showPrint, setShowPrint] = useState(false);
  const [rodape, setRodape] = useState({
    intro1: "Em caso de dúvidas estamos à disposição.",
    intro2: "Aguardamos o de acordo para envio dos dados do agente.",
    nome: "GRAZIELA L. ROSSATO",
    cargo: "CONEXUS PARTNERS",
    email: "graziela.rossato@conexuspartners.com.br",
    celular: "(+55 11) 9 8775-2588",
    site: "www.conexuspartners.com.br",
  });
  const setR = (k, v) => setRodape(p => ({ ...p, [k]: v }));

  const setH = (k, v) => setHeader(p => ({ ...p, [k]: v }));

  const updOrigem = (i, k, v) => { const r = [...taxasOrigem]; r[i] = { ...r[i], [k]: v }; setTaxasOrigem(r); };
  const updDestino = (i, k, v) => { const r = [...taxasDestino]; r[i] = { ...r[i], [k]: v }; setTaxasDestino(r); };
  const addOrigem = () => setTaxasOrigem(p => [...p, { taxa: "Nova taxa", moeda: "USD", valor: "0", un: "processo", qtde: "1", total: "" }]);
  const addDestino = () => setTaxasDestino(p => [...p, { taxa: "Nova taxa", moeda: "USD", valor: "0", un: "processo", qtde: "1", total: "" }]);
  const rmOrigem = i => setTaxasOrigem(p => p.filter((_, x) => x !== i));
  const rmDestino = i => setTaxasDestino(p => p.filter((_, x) => x !== i));

  // Agrupa totais por moeda em uma lista de taxas
  const calcTotaisPorMoeda = (rows) => {
    const totais = {};
    rows.forEach(r => {
      const moeda = r.moeda || "USD";
      const val = calcTotal(r);
      totais[moeda] = (totais[moeda] || 0) + val;
    });
    return totais; // ex: { USD: 780, EUR: 30 }
  };

  const subOrigemPorMoeda = calcTotaisPorMoeda(taxasOrigem);
  const subDestinoPorMoeda = calcTotaisPorMoeda(taxasDestino);

  // Total geral agrupado por moeda (origem + destino)
  const totalGeralPorMoeda = { ...subOrigemPorMoeda };
  Object.entries(subDestinoPorMoeda).forEach(([moeda, val]) => {
    totalGeralPorMoeda[moeda] = (totalGeralPorMoeda[moeda] || 0) + val;
  });

  // Manter compatibilidade com código antigo que usava subOrigem/subDestino
  const subOrigem = Object.values(subOrigemPorMoeda).reduce((a, b) => a + b, 0);
  const subDestino = Object.values(subDestinoPorMoeda).reduce((a, b) => a + b, 0);

  const updRemark = (i, k, v) => { const r = [...remarks]; r[i] = { ...r[i], [k]: v }; setRemarks(r); };
  const updEntrega = (i, k, v) => { const r = [...entrega]; r[i] = { ...r[i], [k]: v }; setEntrega(r); };

  // ── RENDER ──────────────────────────────────────────────────────────────────
  return (
    <div style={{ background: DARKER, minHeight: "100vh", color: TEXT, fontFamily: "'Calibri', 'Segoe UI', sans-serif" }}>
      {/* TOOLBAR */}
      <div style={{ background: DARK, borderBottom: `1px solid ${BORDER}`, padding: "10px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <LogoConexus height={40} />
          <div style={{ borderLeft: `1px solid ${BORDER}`, paddingLeft: 12, marginLeft: 4 }}>
            <div style={{ fontSize: 11, color: TEXT, fontWeight: 600 }}>Editor de Proposta Comercial</div>
            <div style={{ fontSize: 10, color: DIM }}>Preencha os campos e gere o PDF</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={onBack} style={{ background: "transparent", color: "#9a9488", border: "1px solid #2c2f3a", borderRadius: 6, padding: "6px 14px", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", marginRight: 4 }}>
            ← Voltar ao Sistema
          </button>
          <button onClick={() => setShowPrint(!showPrint)} style={{ background: GOLD + "22", color: GOLD, border: `1px solid ${GOLD}44`, borderRadius: 6, padding: "6px 16px", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
            {showPrint ? "✎ Editar" : "👁 Visualizar"}
          </button>
          <button style={{ background: GOLD, color: DARKER, border: "none", borderRadius: 6, padding: "6px 16px", fontSize: 12, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>
            ↓ Gerar PDF
          </button>
        </div>
      </div>

      {/* PROPOSTA */}
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "24px 16px" }}>
        <div style={{ background: "#fff", color: "#111", borderRadius: 8, boxShadow: "0 4px 32px #00000066", overflow: "hidden" }}>

          {/* ── CABEÇALHO ── */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 24px 14px", borderBottom: "3px solid #bd914c" }}>
            {/* Logo real */}
            <LogoConexus height={76} />
            {/* Dados da empresa — todos editáveis */}
            <div style={{ textAlign: "right" }}>
              {showPrint ? (
                <div style={{ fontSize: 8.5, color: "#555", lineHeight: 1.8 }}>
                  <div style={{ fontWeight: 700, color: "#111", fontSize: 10 }}>{hdrInfo.razaoSocial}</div>
                  <div>{hdrInfo.endereco}</div>
                  <div>{hdrInfo.cep}</div>
                  <div>CNPJ: {hdrInfo.cnpj}</div>
                  <div style={{ color: "#bd914c" }}>{hdrInfo.site}</div>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 3, alignItems: "flex-end" }}>
                  {[
                    ["Razão Social", "razaoSocial"],
                    ["Endereço", "endereco"],
                    ["CEP / Fone", "cep"],
                    ["CNPJ", "cnpj"],
                    ["Site", "site"],
                  ].map(([lbl, key]) => (
                    <div key={key} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <span style={{ fontSize: 9, color: "#aaa", whiteSpace: "nowrap" }}>{lbl}:</span>
                      <input
                        value={hdrInfo[key]}
                        onChange={e => setHdrInfo(p => ({ ...p, [key]: e.target.value }))}
                        style={{ border: "none", borderBottom: "1px dashed #ccc", outline: "none", fontSize: 9, color: "#555", background: "transparent", fontFamily: "inherit", textAlign: "right", width: 240 }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div style={{ padding: "14px 24px 0" }}>

            {/* TÍTULO COTAÇÃO */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14, paddingBottom: 8, borderBottom: "1px solid #ddd" }}>
              <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                <span style={{ fontWeight: 700, fontSize: 13, color: "#111" }}>COTAÇÃO</span>
                <div style={{ background: GOLD, color: "#fff", borderRadius: 4, padding: "2px 10px", fontWeight: 700, fontSize: 12 }}>
                  {showPrint ? header.cotacao : <input value={header.cotacao} onChange={e => setH("cotacao", e.target.value)} style={{ background: GOLD, border: "none", outline: "none", color: "#fff", fontWeight: 700, fontSize: 12, width: 90, fontFamily: "inherit" }} />}
                </div>
              </div>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <select value={header.tipo} onChange={e => setH("tipo", e.target.value)} style={{ background: "#f5f5f5", border: "1px solid #ccc", borderRadius: 4, padding: "3px 8px", fontSize: 12, fontWeight: 700, color: "#111", fontFamily: "inherit" }}>
                  <option>IMPORTAÇÃO</option>
                  <option>EXPORTAÇÃO</option>
                </select>
              </div>
            </div>

            {/* INTRO */}
            <div style={{ fontSize: 11, color: "#444", marginBottom: 12 }}>
              <div>Agradecemos pela consulta.</div>
              <div>Segue abaixo nossos valores para sua análise e aprovação de acordo com os dados informados:</div>
            </div>

            {/* DADOS DO CLIENTE */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, marginBottom: 14 }}>
              <table style={{ borderCollapse: "collapse", fontSize: 12 }}>
                <tbody>
                  {[
                    ["CLIENTE:", "cliente"],
                    ["CNPJ:", "cnpj"],
                    ["DATA:", "data"],
                  ].map(([lbl, key]) => (
                    <tr key={key}>
                      <td style={{ padding: "2px 8px 2px 0", fontWeight: 700, color: "#111", whiteSpace: "nowrap", fontSize: 12 }}>{lbl}</td>
                      <td style={{ padding: "2px 4px" }}>
                        {showPrint ? <span style={{ color: "#111" }}>{header[key]}</span> :
                          <input value={header[key]} onChange={e => setH(key, e.target.value)} style={{ border: "none", borderBottom: "1px dashed #ccc", outline: "none", fontSize: 12, color: "#111", background: "transparent", fontFamily: "inherit", width: "100%" }} />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <table style={{ borderCollapse: "collapse", fontSize: 12 }}>
                <tbody>
                  {[
                    ["Incoterm:", "incoterm"],
                    ["Frequência:", "frequencia"],
                    ["Rota:", "rota"],
                  ].map(([lbl, key]) => (
                    <tr key={key}>
                      <td style={{ padding: "2px 8px 2px 12px", fontWeight: 700, color: "#111", whiteSpace: "nowrap", fontSize: 12 }}>{lbl}</td>
                      <td style={{ padding: "2px 4px" }}>
                        {showPrint ? <span style={{ color: "#111" }}>{header[key]}</span> :
                          <input value={header[key]} onChange={e => setH(key, e.target.value)} style={{ border: "none", borderBottom: "1px dashed #ccc", outline: "none", fontSize: 12, color: "#111", background: "transparent", fontFamily: "inherit", width: "100%" }} />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* DADOS DO EMBARQUE */}
            <div style={{ background: "#f9f7f4", border: "1px solid #e8e0d5", borderRadius: 6, padding: "10px 14px", marginBottom: 16 }}>
              <table style={{ borderCollapse: "collapse", width: "100%", fontSize: 12 }}>
                <tbody>
                  {[
                    ["Origem:", "origem"],
                    ["Destino:", "destino"],
                    ["Entrega:", "entrega"],
                    ["Dimensão:", "dimensao"],
                    ["Peso taxado:", "pesoTaxado"],
                    ["Transit time:", "transit"],
                    ["Valor mercadoria:", "valorMerc"],
                    ["Validade:", "validade"],
                  ].map(([lbl, key]) => (
                    <tr key={key}>
                      <td style={{ padding: "3px 10px 3px 0", fontWeight: 700, color: "#333", whiteSpace: "nowrap", width: 140 }}>{lbl}</td>
                      <td style={{ padding: "3px 0" }}>
                        {showPrint ? <span style={{ color: "#111" }}>{header[key]}</span> :
                          <input value={header[key]} onChange={e => setH(key, e.target.value)} style={{ border: "none", borderBottom: "1px dashed #ccc", outline: "none", fontSize: 12, color: "#111", background: "transparent", fontFamily: "inherit", width: "100%" }} />}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td style={{ padding: "3px 10px 3px 0", fontWeight: 700, color: "#333", whiteSpace: "nowrap" }}>Observação:</td>
                    <td style={{ padding: "3px 0" }}>
                      {showPrint ? <span style={{ color: "#111" }}>{header.observacao}</span> :
                        <input value={header.observacao} onChange={e => setH("observacao", e.target.value)} style={{ border: "none", borderBottom: "1px dashed #ccc", outline: "none", fontSize: 12, color: "#111", background: "transparent", fontFamily: "inherit", width: "100%" }} />}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* DETALHES DA COTAÇÃO */}
            <div style={{ fontWeight: 700, fontSize: 13, color: "#111", marginBottom: 10, paddingBottom: 4, borderBottom: "2px solid #bd914c" }}>
              DETALHES DA COTAÇÃO:
            </div>

            {/* TAXAS DE ORIGEM */}
            <div style={{ marginBottom: 16 }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
                <thead>
                  <tr style={{ background: "#bd914c22" }}>
                    <th style={{ padding: "7px 8px", color: "#111", fontWeight: 800, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.06em", textAlign: "left", borderBottom: "2px solid #bd914c", width: "32%" }}>TAXAS DE ORIGEM</th>
                    <th style={{ padding: "7px 8px", color: "#555", fontWeight: 700, fontSize: 11, textTransform: "uppercase", textAlign: "center", borderBottom: "2px solid #bd914c", width: "8%" }}>MOEDA</th>
                    <th style={{ padding: "7px 8px", color: "#555", fontWeight: 700, fontSize: 11, textTransform: "uppercase", textAlign: "center", borderBottom: "2px solid #bd914c", width: "14%" }}>VALOR UNIT.</th>
                    <th style={{ padding: "7px 8px", color: "#555", fontWeight: 700, fontSize: 11, textTransform: "uppercase", textAlign: "left", borderBottom: "2px solid #bd914c", width: "22%" }}>UN. EMBARQUE</th>
                    <th style={{ padding: "7px 8px", color: "#555", fontWeight: 700, fontSize: 11, textTransform: "uppercase", textAlign: "center", borderBottom: "2px solid #bd914c", width: "10%" }}>QTDE.</th>
                    <th style={{ padding: "7px 8px", color: "#555", fontWeight: 700, fontSize: 11, textTransform: "uppercase", textAlign: "center", borderBottom: "2px solid #bd914c", width: "10%" }}>TOTAL</th>
                    {!showPrint && <th style={{ width: 24, borderBottom: "2px solid #bd914c" }} />}
                  </tr>
                </thead>
                <tbody>
                  {taxasOrigem.map((row, i) => {
                    const tot = calcTotal(row);
                    return (
                      <tr key={i} style={{ borderBottom: "1px solid #eee" }}>
                        <td style={{ padding: "5px 8px" }}>
                          {showPrint ? <span>{row.taxa}</span> :
                            <input value={row.taxa} onChange={e => updOrigem(i, "taxa", e.target.value)} style={{ border: "none", borderBottom: "1px dashed #ddd", outline: "none", fontSize: 12, color: "#111", background: "transparent", fontFamily: "inherit", width: "100%" }} />}
                        </td>
                        <td style={{ padding: "5px 8px", textAlign: "center" }}>
                          {showPrint ? <span style={{ color: "#555" }}>{row.moeda}</span> :
                            <input value={row.moeda} onChange={e => updOrigem(i, "moeda", e.target.value)} style={{ border: "none", borderBottom: "1px dashed #ddd", outline: "none", fontSize: 12, fontFamily: "monospace", fontWeight: 600, color: "#444", background: "transparent", textAlign: "center", width: 46 }} />}
                        </td>
                        <td style={{ padding: "5px 8px", textAlign: "center" }}>
                          {showPrint ? <span style={{ fontFamily: "monospace", color: "#333" }}>{row.valor}</span> :
                            <input value={row.valor} onChange={e => updOrigem(i, "valor", e.target.value)} style={{ border: "none", borderBottom: "1px dashed #ddd", outline: "none", fontSize: 12, fontFamily: "monospace", color: "#111", background: "transparent", textAlign: "center", width: "100%" }} />}
                        </td>
                        <td style={{ padding: "5px 8px", color: "#555", fontSize: 11 }}>
                          {showPrint ? row.un :
                            <input value={row.un} onChange={e => updOrigem(i, "un", e.target.value)} style={{ border: "none", borderBottom: "1px dashed #ddd", outline: "none", fontSize: 11, color: "#555", background: "transparent", fontFamily: "inherit", width: "100%" }} />}
                        </td>
                        <td style={{ padding: "5px 8px", textAlign: "center", fontFamily: "monospace" }}>
                          {showPrint ? row.qtde :
                            <input value={row.qtde} onChange={e => updOrigem(i, "qtde", e.target.value)} style={{ border: "none", borderBottom: "1px dashed #ddd", outline: "none", fontSize: 12, fontFamily: "monospace", color: "#111", background: "transparent", textAlign: "center", width: "100%" }} />}
                        </td>
                        <td style={{ padding: "5px 8px", textAlign: "center", fontFamily: "monospace", fontWeight: 700, color: "#333" }}>
                          {row.total || (tot > 0 ? tot.toFixed(2) : "—")}
                        </td>
                        {!showPrint && <td style={{ padding: "5px 4px", textAlign: "center" }}>
                          <button onClick={() => rmOrigem(i)} style={{ background: "none", border: "none", color: "#bbb", cursor: "pointer", fontSize: 14 }} onMouseOver={e => e.currentTarget.style.color = RED} onMouseOut={e => e.currentTarget.style.color = "#bbb"}>×</button>
                        </td>}
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr style={{ background: "#f5f5f5" }}>
                    <td colSpan={showPrint ? 5 : 6} style={{ padding: "6px 8px", textAlign: "right", fontWeight: 700, color: "#555", fontSize: 11 }}>Sub-total</td>
                    <td style={{ padding: "6px 8px", borderTop: "1px solid #ddd" }}>
                      {Object.entries(subOrigemPorMoeda).map(([moeda, val]) => (
                        <div key={moeda} style={{ textAlign: "center", fontWeight: 800, color: "#333", fontFamily: "monospace", fontSize: 12, lineHeight: 1.6 }}>
                          <span style={{ fontSize: 10, color: "#888", marginRight: 4 }}>{moeda}</span>{val.toFixed(2)}
                        </div>
                      ))}
                    </td>
                    {!showPrint && <td />}
                  </tr>
                  {!showPrint && (
                    <tr>
                      <td colSpan={7} style={{ padding: "6px 8px" }}>
                        <button onClick={addOrigem} style={{ background: "#bd914c18", color: GOLD, border: "1px dashed #bd914c66", borderRadius: 5, padding: "3px 14px", fontSize: 11, cursor: "pointer", fontFamily: "inherit" }}>
                          + Adicionar taxa de origem
                        </button>
                      </td>
                    </tr>
                  )}
                </tfoot>
              </table>
            </div>

            {/* TAXAS DE DESTINO */}
            <div style={{ marginBottom: 16 }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
                <thead>
                  <tr style={{ background: "#5c9de022" }}>
                    <th style={{ padding: "7px 8px", color: "#111", fontWeight: 800, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.06em", textAlign: "left", borderBottom: "2px solid #5c9de0", width: "32%" }}>TAXAS DE DESTINO</th>
                    <th style={{ padding: "7px 8px", color: "#555", fontWeight: 700, fontSize: 11, textTransform: "uppercase", textAlign: "center", borderBottom: "2px solid #5c9de0", width: "8%" }}>MOEDA</th>
                    <th style={{ padding: "7px 8px", color: "#555", fontWeight: 700, fontSize: 11, textTransform: "uppercase", textAlign: "center", borderBottom: "2px solid #5c9de0", width: "14%" }}>VALOR UNIT.</th>
                    <th style={{ padding: "7px 8px", color: "#555", fontWeight: 700, fontSize: 11, textTransform: "uppercase", textAlign: "left", borderBottom: "2px solid #5c9de0", width: "22%" }}>UN. EMBARQUE</th>
                    <th style={{ padding: "7px 8px", color: "#555", fontWeight: 700, fontSize: 11, textTransform: "uppercase", textAlign: "center", borderBottom: "2px solid #5c9de0", width: "10%" }}>QTDE.</th>
                    <th style={{ padding: "7px 8px", color: "#555", fontWeight: 700, fontSize: 11, textTransform: "uppercase", textAlign: "center", borderBottom: "2px solid #5c9de0", width: "10%" }}>TOTAL</th>
                    {!showPrint && <th style={{ width: 24, borderBottom: "2px solid #5c9de0" }} />}
                  </tr>
                </thead>
                <tbody>
                  {taxasDestino.map((row, i) => {
                    const tot = calcTotal(row);
                    return (
                      <tr key={i} style={{ borderBottom: "1px solid #eee" }}>
                        <td style={{ padding: "5px 8px" }}>
                          {showPrint ? <span>{row.taxa}</span> :
                            <input value={row.taxa} onChange={e => updDestino(i, "taxa", e.target.value)} style={{ border: "none", borderBottom: "1px dashed #ddd", outline: "none", fontSize: 12, color: "#111", background: "transparent", fontFamily: "inherit", width: "100%" }} />}
                        </td>
                        <td style={{ padding: "5px 8px", textAlign: "center" }}>
                          {showPrint ? <span style={{ color: "#555" }}>{row.moeda}</span> :
                            <input value={row.moeda} onChange={e => updDestino(i, "moeda", e.target.value)} style={{ border: "none", borderBottom: "1px dashed #ddd", outline: "none", fontSize: 12, fontFamily: "monospace", fontWeight: 600, color: "#444", background: "transparent", textAlign: "center", width: 46 }} />}
                        </td>
                        <td style={{ padding: "5px 8px", textAlign: "center" }}>
                          {showPrint ? <span style={{ fontFamily: "monospace", color: "#333" }}>{row.valor}</span> :
                            <input value={row.valor} onChange={e => updDestino(i, "valor", e.target.value)} style={{ border: "none", borderBottom: "1px dashed #ddd", outline: "none", fontSize: 12, fontFamily: "monospace", color: "#111", background: "transparent", textAlign: "center", width: "100%" }} />}
                        </td>
                        <td style={{ padding: "5px 8px", color: "#555", fontSize: 11 }}>
                          {showPrint ? row.un :
                            <input value={row.un} onChange={e => updDestino(i, "un", e.target.value)} style={{ border: "none", borderBottom: "1px dashed #ddd", outline: "none", fontSize: 11, color: "#555", background: "transparent", fontFamily: "inherit", width: "100%" }} />}
                        </td>
                        <td style={{ padding: "5px 8px", textAlign: "center", fontFamily: "monospace" }}>
                          {showPrint ? row.qtde :
                            <input value={row.qtde} onChange={e => updDestino(i, "qtde", e.target.value)} style={{ border: "none", borderBottom: "1px dashed #ddd", outline: "none", fontSize: 12, fontFamily: "monospace", color: "#111", background: "transparent", textAlign: "center", width: "100%" }} />}
                        </td>
                        <td style={{ padding: "5px 8px", textAlign: "center", fontFamily: "monospace", fontWeight: 700, color: "#333" }}>
                          {row.total || (tot > 0 ? tot.toFixed(2) : "—")}
                        </td>
                        {!showPrint && <td style={{ padding: "5px 4px", textAlign: "center" }}>
                          <button onClick={() => rmDestino(i)} style={{ background: "none", border: "none", color: "#bbb", cursor: "pointer", fontSize: 14 }} onMouseOver={e => e.currentTarget.style.color = RED} onMouseOut={e => e.currentTarget.style.color = "#bbb"}>×</button>
                        </td>}
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr style={{ background: "#f5f5f5" }}>
                    <td colSpan={showPrint ? 5 : 6} style={{ padding: "6px 8px", textAlign: "right", fontWeight: 700, color: "#555", fontSize: 11 }}>Sub-total</td>
                    <td style={{ padding: "6px 8px", borderTop: "1px solid #ddd" }}>
                      {Object.entries(subDestinoPorMoeda).map(([moeda, val]) => (
                        <div key={moeda} style={{ textAlign: "center", fontWeight: 800, color: "#333", fontFamily: "monospace", fontSize: 12, lineHeight: 1.6 }}>
                          <span style={{ fontSize: 10, color: "#888", marginRight: 4 }}>{moeda}</span>{val.toFixed(2)}
                        </div>
                      ))}
                    </td>
                    {!showPrint && <td />}
                  </tr>
                  {!showPrint && (
                    <tr>
                      <td colSpan={7} style={{ padding: "6px 8px" }}>
                        <button onClick={addDestino} style={{ background: "#5c9de018", color: BLUE, border: "1px dashed #5c9de066", borderRadius: 5, padding: "3px 14px", fontSize: 11, cursor: "pointer", fontFamily: "inherit" }}>
                          + Adicionar taxa de destino
                        </button>
                      </td>
                    </tr>
                  )}
                </tfoot>
              </table>
            </div>

            {/* TOTAL GERAL */}
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 20 }}>
              <div style={{ background: GOLD, borderRadius: 6, padding: "10px 20px", display: "flex", alignItems: "center", gap: 24 }}>
                <span style={{ fontWeight: 800, fontSize: 13, color: "#fff", letterSpacing: "0.06em" }}>TOTAL GERAL</span>
                <div style={{ display: "flex", flexDirection: "column", gap: 2, alignItems: "flex-end" }}>
                  {Object.entries(totalGeralPorMoeda).map(([moeda, val]) => (
                    <div key={moeda} style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                      <span style={{ fontSize: 11, color: "#fff9", fontWeight: 600, letterSpacing: "0.08em" }}>{moeda}</span>
                      <span style={{ fontWeight: 900, fontSize: 18, color: "#fff", fontFamily: "monospace" }}>{val.toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* REMARKS */}
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontWeight: 800, fontSize: 12, color: "#111", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em", borderBottom: "1px solid #ddd", paddingBottom: 4 }}>REMARKS:</div>
              <div style={{ marginBottom: 8 }}>
                <div style={{ fontWeight: 700, fontSize: 12, color: "#333", marginBottom: 4 }}>DESEMBARAÇO ADUANEIRO:</div>
                {remarks.map((r, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                    {showPrint ? (
                      <span style={{ fontSize: 12, color: "#111" }}>{r.label} = R$ {r.valor}</span>
                    ) : (
                      <>
                        <input value={r.label} onChange={e => updRemark(i, "label", e.target.value)} style={{ border: "none", borderBottom: "1px dashed #ccc", outline: "none", fontSize: 12, color: "#111", background: "transparent", fontFamily: "inherit", width: 240 }} />
                        <span style={{ color: "#888", fontSize: 12, whiteSpace: "nowrap" }}>= R$</span>
                        <input value={r.valor} onChange={e => updRemark(i, "valor", e.target.value)} style={{ border: "none", borderBottom: "1px dashed #ccc", outline: "none", fontSize: 12, color: "#111", background: "transparent", fontFamily: "monospace", width: 110 }} />
                        <button onClick={() => setRemarks(p => p.filter((_, x) => x !== i))} style={{ background: "none", border: "none", color: "#ccc", cursor: "pointer", fontSize: 14, lineHeight: 1 }} onMouseOver={e => e.currentTarget.style.color="#e05c5c"} onMouseOut={e => e.currentTarget.style.color="#ccc"}>×</button>
                      </>
                    )}
                  </div>
                ))}
                {!showPrint && (
                  <button onClick={() => setRemarks(p => [...p, { label: "Nova taxa", valor: "0,00" }])} style={{ background: "#f5f5f5", color: "#888", border: "1px dashed #ccc", borderRadius: 4, padding: "2px 10px", fontSize: 11, cursor: "pointer", fontFamily: "inherit", marginTop: 4 }}>
                    + Adicionar item
                  </button>
                )}
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 12, color: "#333", marginBottom: 6 }}>ENTREGA FINAL:</div>
                <table style={{ borderCollapse: "collapse", fontSize: 12 }}>
                  <tbody>
                    {entrega.map((r, i) => (
                      <tr key={i}>
                        <td style={{ padding: "2px 8px 2px 0", color: "#555", whiteSpace: "nowrap" }}>
                          {showPrint ? <span>{r.label}:</span> :
                            <input value={r.label} onChange={e => updEntrega(i, "label", e.target.value)} style={{ border: "none", borderBottom: "1px dashed #ccc", outline: "none", fontSize: 12, color: "#555", background: "transparent", fontFamily: "inherit", width: 100 }} />}
                        </td>
                        <td style={{ padding: "2px 4px", color: "#888", fontSize: 11, whiteSpace: "nowrap" }}>
                          {r.label !== "ICMS / ISS" ? "R$" : ""}
                        </td>
                        <td style={{ padding: "2px 0" }}>
                          {showPrint ? <span style={{ fontFamily: "monospace", color: "#111" }}>{r.valor}</span> :
                            <input value={r.valor} onChange={e => updEntrega(i, "valor", e.target.value)} style={{ border: "none", borderBottom: "1px dashed #ccc", outline: "none", fontSize: 12, fontFamily: "monospace", color: "#111", background: "transparent", width: 140 }} />}
                        </td>
                        {!showPrint && (
                          <td style={{ padding: "2px 4px" }}>
                            <button onClick={() => setEntrega(p => p.filter((_, x) => x !== i))} style={{ background: "none", border: "none", color: "#ccc", cursor: "pointer", fontSize: 14, lineHeight: 1 }} onMouseOver={e => e.currentTarget.style.color="#e05c5c"} onMouseOut={e => e.currentTarget.style.color="#ccc"}>×</button>
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
                {!showPrint && (
                  <button onClick={() => setEntrega(p => [...p, { label: "Nova linha", valor: "0,00" }])} style={{ background: "#f5f5f5", color: "#888", border: "1px dashed #ccc", borderRadius: 4, padding: "2px 10px", fontSize: 11, cursor: "pointer", fontFamily: "inherit", marginTop: 6 }}>
                    + Adicionar linha
                  </button>
                )}
              </div>
            </div>

            {/* OBSERVAÇÕES GERAIS */}
            <div style={{ marginBottom: 20, background: "#fdfaf6", border: "1px solid #e8e0d5", borderRadius: 6, padding: "10px 14px" }}>
              <div style={{ fontWeight: 700, fontSize: 11, color: "#888", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>
                Observações Gerais
              </div>
              {showPrint ? (
                <div style={{ fontSize: 12, color: "#111", whiteSpace: "pre-wrap", minHeight: 30, fontFamily: "monospace" }}>
                  {obsGeral || "—"}
                </div>
              ) : (
                <div>
                  <textarea
                    value={obsGeral}
                    onChange={e => setObsGeral(e.target.value)}
                    onPaste={e => {
                      // Captura colar de tabela Excel (TSV) e formata como texto tabulado
                      const text = e.clipboardData.getData("text/plain");
                      if (text.includes("\t")) {
                        e.preventDefault();
                        // Converte TSV em texto legível mantendo alinhamento
                        const lines = text.split("\n").filter(l => l.trim());
                        const formatted = lines.map(line =>
                          line.split("\t").join("   |   ")
                        ).join("\n");
                        const el = e.target;
                        const start = el.selectionStart;
                        const end = el.selectionEnd;
                        const newVal = obsGeral.substring(0, start) + formatted + obsGeral.substring(end);
                        setObsGeral(newVal);
                      }
                      // Se não for tabela, cola normalmente
                    }}
                    placeholder={"Digite livremente ou cole uma tabela do Excel aqui...\n\nEx: Carga Geral - Não IMO - sujeita a confirmação de espaço.\nValores válidos para pagamento à vista.\nMulta de 4% por atraso — mínimo USD 60,00.\nAguardamos o de acordo para envio dos dados do agente."}
                    style={{
                      width: "100%",
                      minHeight: 100,
                      border: "1px solid #ddd",
                      borderRadius: 4,
                      outline: "none",
                      fontSize: 12,
                      color: "#111",
                      background: "#fff",
                      fontFamily: "monospace",
                      resize: "vertical",
                      boxSizing: "border-box",
                      padding: "8px 10px",
                      lineHeight: 1.6,
                    }}
                  />
                  <div style={{ fontSize: 10, color: "#aaa", marginTop: 4 }}>
                    💡 Dica: você pode colar tabelas diretamente do Excel — as colunas serão separadas por " | "
                  </div>
                </div>
              )}
            </div>

            {/* RODAPÉ */}
            <div style={{ borderTop: "1px solid #ddd", paddingTop: 14, marginBottom: 20 }}>
              <div style={{ fontSize: 12, color: "#555", marginBottom: 12 }}>
                {showPrint ? (
                  <>
                    <div>{rodape.intro1}</div>
                    <div>{rodape.intro2}</div>
                  </>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <input value={rodape.intro1} onChange={e => setR("intro1", e.target.value)} style={{ border: "none", borderBottom: "1px dashed #ccc", outline: "none", fontSize: 12, color: "#555", background: "transparent", fontFamily: "inherit", width: "100%" }} />
                    <input value={rodape.intro2} onChange={e => setR("intro2", e.target.value)} style={{ border: "none", borderBottom: "1px dashed #ccc", outline: "none", fontSize: 12, color: "#555", background: "transparent", fontFamily: "inherit", width: "100%" }} />
                  </div>
                )}
              </div>
              <div style={{ fontSize: 11, color: "#777", marginBottom: 12 }}>Atenciosamente,</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                <div>
                  {showPrint ? (
                    <>
                      <div style={{ fontWeight: 700, fontSize: 12, color: "#111" }}>{rodape.nome}</div>
                      <div style={{ fontWeight: 700, fontSize: 11, color: GOLD }}>{rodape.cargo}</div>
                      <div style={{ fontSize: 10, color: "#666", marginTop: 4 }}>E-mail: {rodape.email}</div>
                      <div style={{ fontSize: 10, color: "#666" }}>Cel/WhatsApp: {rodape.celular}</div>
                      <div style={{ fontSize: 10, color: "#666" }}>Site: {rodape.site}</div>
                    </>
                  ) : (
                    <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                      {[["Nome", "nome", true], ["Cargo / Empresa", "cargo", false], ["E-mail", "email", false], ["Cel/WhatsApp", "celular", false], ["Site", "site", false]].map(([lbl, key, bold]) => (
                        <div key={key} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                          <span style={{ fontSize: 9, color: "#aaa", width: 80, flexShrink: 0 }}>{lbl}:</span>
                          <input value={rodape[key]} onChange={e => setR(key, e.target.value)} style={{ border: "none", borderBottom: "1px dashed #ccc", outline: "none", fontSize: bold ? 12 : 10, fontWeight: bold ? 700 : 400, color: key === "cargo" ? "#bd914c" : "#111", background: "transparent", fontFamily: "inherit", flex: 1 }} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div style={{ borderLeft: "1px dashed #ccc", paddingLeft: 20 }}>
                  <div style={{ fontSize: 11, color: "#555", marginBottom: 16 }}>DE ACORDO: ______________________________________</div>
                  <div style={{ fontSize: 10, color: "#777" }}>Responsável (cliente): nome, assinatura e carimbo da empresa.</div>
                  <div style={{ fontSize: 10, color: "#777", marginTop: 8 }}>DATA: _____ / _____ / {new Date().getFullYear()}</div>
                </div>
              </div>
            </div>

          </div>{/* end padding */}
        </div>{/* end white card */}
      </div>{/* end max-width */}
    </div>
  );
}
