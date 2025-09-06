<template>
  <label :for="name" class="block mt-8 text-gray-700 mb-1">{{ label }}</label>
  <Field
  :name="name"
  :type="type"
  :as="inputTag"
  :placeholder="placeholder"
      class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
  />
  <ErrorMessage :name="name" class="text-red-500 text-sm mt-1"/>
</template>

<script setup>
import { Field ,ErrorMessage} from "vee-validate";
defineProps({
  name: String,
  label: String,
  placeholder: String,
  inputTag: String,
  type: String,
});
</script>
