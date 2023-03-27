function DarkTheme() {
    return(
        <style jsx global>{`
        :root {
            --background-color: rgb(50, 47, 47);
            --text-color: rgb(216, 208, 208);
            --link-color: rgb(246, 9, 132);
        }
        `}</style>
    );
}

export default DarkTheme;