<script>
import Button from '../reusable/Button.vue';
import FormInput from '../reusable/FormInput.vue';
import FormTextarea from '../reusable/FormTextarea.vue';
export default { components: { Button, FormInput, FormTextarea } };
</script>

<template>
	<div class="w-full md:w-1/2">
		<div
			class="leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
		>
			<p
				class="font-medium text-primary-dark dark:text-primary-light text-2xl mb-8"
			>
				Xin mời bạn nhập thông tin liên hệ
			</p>
			<form action="#" class="font-regular space-y-7">
				<FormInput label="Họ và Tên" inputIdentifier="name" />
				<FormInput
					label="Email"
					inputIdentifier="email"
					inputType="email"
				/>
				<FormInput label="Tiêu Đề" inputIdentifier="subject" />
				<FormTextarea label="Nội Dung Tin Nhắn" textareaIdentifier="message" />

				<div>
					<Button
						title="Gửi Tin Nhắn"
						class="px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
						type="submit"
						aria-label="Send Message"
					/>
				</div>
			</form>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
