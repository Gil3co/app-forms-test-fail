<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<form use:enhance={() => {}} method="post">
	<input value="12" />
</form>
