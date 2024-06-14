<script>
export default {
	data: () => {
		return {
			copyrightDate: new Date().getFullYear(),
			projectName: 'VueJS & Tailwind CSS',
			author: 'Huỳnh Vĩnh Tiến',
		};
	},
};
</script>

<template>
	<div class="flex justify-center items-center text-center">
		<div
			class="font-regular text-lg text-ternary-dark dark:text-ternary-light"
		>
			&copy; {{ copyrightDate }}.
			<a
				href="https://github.com/realstoman/vuejs-tailwindcss-portfolio"
				target="__blank"
				class="font-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
			>
				{{ projectName }}
			</a>
			. Mọi Bản Quyền Thuộc Về
			<a
				href="https://stoman.me"
				target="__blank"
				class="font-bold text-[#41b883] dark:text-secondary-light uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
				>{{ author }}</a
			>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
