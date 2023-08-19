export async function GET(request){
    const users = [
        {id: 1, name: 'John'},
    ];

    return new Response(JSON.stringify(users));
}