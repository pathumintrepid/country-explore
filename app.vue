<template>
  <div className="flex flex-col min-h-screen">
    <NuxtLayout>
      <Header></Header>
      <main className="flex-grow">
        <NuxtPage />
      </main>
      <Footer></Footer>
    </NuxtLayout>
  </div>
</template>
