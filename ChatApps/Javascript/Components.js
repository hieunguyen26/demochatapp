const components = {}
components.welcomeScreen = `
<h1>Welcome to Chat App</h1>`; // dùng dấu này để xuống dòng vẫn nhận là string

components.registerScreen = `<div class="register-container">
<div class="aside-right">
    <div class="header">
        <h3>My App Chat</h3>
    </div>
    <form id="register-form">
        <div class="input-name-wrapper">
            <div class="input-wrapper">
                <input type="text" name="firstName" placeholder="First Name">
                <div class="error" id="first-name-error"></div>
            </div>

            <div class="input-wrapper">
                <input type="text" name="lastName" placeholder="Last Name">
                <div class="error" id="last-name-error"></div>
            </div>
        </div>

        <div class="input-wrapper">
            <input type="email" placeholder="Email" name="email">
            <div class="error" id="email-error"></div>
        </div>

        <div class="input-wrapper">
            <input type="password" placeholder="Password..." name="password">
            <div class="error" id="password-error"></div>
        </div>

        <div class="input-wrapper">
            <input type="password" placeholder="Confirm Password..." name="confirmPassword">
            <div class="error" id="confirm-password-error"></div>
        </div>

        <div class="form-action">
            <span id="redirect-to-login">
                Already have an account? <a onclick="goToLogIn()" href="#">Login</a>
            </span>

            <button class="btn" type="submit">Register</button>
        </div>
    </form>
</div>
</div>`

components.loginScreen = `<div class="login-container">
<div class="aside-right">
    <div class="header">
        <h3>My App Chat</h3>
    </div>
    <form id="login-form">
     <div class="input-wrapper">
            <input type="email" placeholder="Email" name="email">
            <div class="error" id="email-error"></div>
        </div>

        <div class="input-wrapper">
            <input type="password" placeholder="Password..." name="password">
            <div class="error" id="password-error"></div>
        </div>

        <div class="form-action">
            <span id="redirect-to-register">
                Don't have an account? <a onclick="goToRegister()">Register</a>
            </span>

            <button class="btn" type="submit">Login</button>
        </div>
    </form>
</div>
</div>`