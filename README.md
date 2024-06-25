# Basic Banking System

```mermaid
flowchart TD;
    A(Start)
    A-->B[/Input initial deposit/]
    B-->C{Is it valid?}
    L((Type Opeartion))-->D
    C--Yes-->D[/Menu to deposit, withdraw, check balance, or stop/]
    C--Noo-->E[/Choose to start or stop/]
    E--Type Operation-->F{Start or stop?}
    F--Start-->B
    F--Stop-->G(stop)
    D--Type Operation-->H{Is it valid?}
    H--Noo-->D
    H--Deposit-->I((Deposit))
    H--Withdraw-->J((Withdraw))
    H--Check-->K[/Show User's Balance/]
    H--Stop-->G
    I-->D
    J-->D
    K-->D
    click I "https://github.com/KevinDylanPrayudi/BEJS_fgabatch2_KevinDylanPrayudi_Challenge2?tab=readme-ov-file#deposit"
    click J "https://github.com/KevinDylanPrayudi/BEJS_fgabatch2_KevinDylanPrayudi_Challenge2?tab=readme-ov-file#withdraw"
```
## Deposit
```mermaid
flowchart TD;
A((Deposit))
A-->B[/Input deposit/]
B-->C{Is it valid?}
C--Yes-->D[Process to deposit]
D-->F((Type Operation))
C--Noo-->E[/Warning to user/]
E-->B
```
## Withdraw
```mermaid
flowchart TD;
A((Withdraw))
A-->B[/Input withdraw/]
B-->C{Is it valid?}
C--Yes-->D[Process to withdraw]
D-->F((Type Operation))
C--Noo-->E[/Warning to user/]
E-->B