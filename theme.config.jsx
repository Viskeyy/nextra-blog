export default {
    footer: (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
                MIT 2023 ©{' '}
                <a href='https://github.com/Viskeyy' target='blank'>
                    Viskeyy
                </a>
            </div>
            <div>
                Deploy on{' '}
                <a
                    href='https://vercel.com/'
                    style={{ color: 'gray' }}
                    target='blank'
                >
                    Vercel
                </a>
            </div>
        </div>
    ),
    head: ({ title, meta }) => (
        <>
            {title && <title>{title}</title>}
            {meta.description && (
                <meta name='description' content={meta.description} />
            )}
            {meta.tag && <meta name='keywords' content={meta.tag} />}
            {meta.author && <meta name='author' content={meta.author} />}
        </>
    ),
    readMore: 'Read more →',
    postFooter: null,
    darkMode: true,
};
