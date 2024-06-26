# Basic Banking System
<details open>
<summary>List of contents</summary>
<ul>
    <li>[Deposit](#deposit)</li>
    <li>[Withdraw](#withdraw)</li>
</ul>
</details>
The BankingSystem class is a subclass of BankAccount that provides methods for depositing, withdrawing, and retrieving the balance of a bank account. It extends the functionality of the BankAccount class by adding error handling and user interaction. The deposit and withdraw methods prompt the user for input, validate the amount, and update the balance accordingly. The getBalance method retrieves the current balance of the account asynchronously after a delay of 1 second.

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
    K-->D
```
***<p style="text-align: center;">Overview of Basic System in Flowchart</p>***

## Deposit
 It prompts the user to enter an amount to deposit, validates the amount, and then deposits it into the account. If an error occurs during the deposit, it alerts the user with the error message and recursively calls the [deposit]
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
***<p style="text-align: center;">Flowchart of deposit process</p>***

## Withdraw
This code is like a function in a banking system that lets you take money out of your account.

It first asks you how much money you want to take out. Then it checks if you have enough money in your account to take out that amount. If you don't have enough, it will show you a message saying you can't take out that much.

If you have enough money, it will take the money out of your account and show you how much money you have left.

If something goes wrong during this process, like entering the wrong amount, it will show you an error message and let you try again to take out money.

It's like a digital ATM, but in a programming language!
```mermaid
flowchart TD;
A((Withdraw))
A-->B[/Input withdraw/]
B-->C{Is it valid?}
C--Yes-->D[Process to withdraw]
D-->F((Type Operation))
C--Noo-->E[/Warning to user/]
E-->B
```
***<p style="text-align: center;">Flowchart of withdraw's process</p>***
***Attention: <p style="color: red">For running this code u have to runs it to Web Server or Enables CORS Policy</p>***