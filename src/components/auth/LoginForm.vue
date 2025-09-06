<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md bg-white shadow-md rounded-lg p-6">
      <h2 class="text-2xl font-semibold text-center mb-4">Login</h2>
      <Form :validation-schema="schema" @submit="handleSubmit">
        <LoginInput
          name="username"
          placeholder="Enter your username"
          label="Username"
          type="text"
          inputTag="input"
        />
        <LoginInput
          name="password"
          placeholder="Enter your password"
          label="Password"
          type="text"
          inputTag="input"
        />
        <div class="mt-4">
          <LoginButton />
        </div>
        <p v-if="error" class="text-red-500 text-sm mt-2">{{ error }}</p>
      </Form>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from "../../stores/authStore";
import LoginInput from "./LoginInput.vue";
import LoginButton from "./LoginButton.vue";
import { Form } from "vee-validate";
import { useRouter } from "vue-router";
import * as yup from "yup";
import { ref } from "vue";
const loading = ref(false);
const error = ref(null);
const router = useRouter();
const auth = useAuthStore();
const schema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .min(6, "Password not least than 6 ")
    .required("Password is required"),
});
const handleSubmit = async (values) => {
  loading.value = true;
  error.value = "";
  try {
    await auth.login(values.username, values.password);
    router.push("/");
    alert("Login successful!");
  } catch {
    error.value = "Invalid credentials!";
  } finally {
    loading.value = false;
  }
};
</script>
