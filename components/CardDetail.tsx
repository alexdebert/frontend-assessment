export default function CardDetail({property, value}: {
    property: string;
    value: string | number;
}) {

    return (
        <div className="border-t border-gray-200 pt-4">
            <dt className="font-medium text-gray-900">{property}</dt>
            <dd className="mt-2 text-sm text-gray-500">{value}</dd>
        </div>
    );
}
